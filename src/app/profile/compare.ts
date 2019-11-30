interface Item {
  from: Date;
  to: Date | null;
}

export const compare = (a: Item, b: Item): number => {
  if (a.to === null && b.to !== null) {
    return -1;
  }

  if (b.to === null && a.to !== null) {
    return 1;
  }

  if (a.to === null && b.to === null) {
    return a.from.getTime() > b.from.getTime() ? -1 : 1;
  }

  const aToTime = a.to!.getTime();
  const bToTime = b.to!.getTime();

  return aToTime > bToTime ? -1 : 1;
};
