#!/usr/bin/env bash

set -eu

DOMAIN="tsugitta.com"
BUCKET_NAME="tsugitta.com"

DIR=$(cd $(dirname $BASH_SOURCE); pwd)
ROOT_DIR="${DIR}/"
cd ${ROOT_DIR}

# build
yarn build --prod --base-href "https://${DOMAIN}"
sed -i '' 's/##date##/'$(date +'%Y%m%d%H%M')'/' dist/index.html

DISTRIBUTION_ID=$(cd terraform && terraform output distribution_id)

aws s3 sync ./dist "s3://${BUCKET_NAME}/" --delete
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
