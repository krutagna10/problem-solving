function checkAll(arr: number[], callback: (num: number) => boolean) {
  if (arr.length === 0) {
    return true;
  }

  const firstElement = arr.shift();

  if (callback(firstElement)) {
    return checkAll(arr, callback);
  }
  return false;
}

