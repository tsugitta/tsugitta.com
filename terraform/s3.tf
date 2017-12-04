resource "aws_s3_bucket" "corporate" {
  bucket = "${var.bucket_name}"
  acl    = "private"
  policy = "${data.template_file.s3_policy.rendered}"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket" "corporate_cf_logs" {
  bucket = "${var.log_bucket_name}"
  acl    = "private"
}

data "template_file" "s3_policy" {
  template = "${file("${path.module}/s3_policy.json.tpl")}"

  vars {
    bucket_name            = "${var.bucket_name}"
    origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.id}"
  }
}
