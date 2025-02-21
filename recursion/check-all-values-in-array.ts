function checkAll(arr: number[], callback: (num: number) => boolean) {
  if (arr.length === 0) {
    return true;
  }

  if (callback(arr[0])) {
    return checkAll(arr.slice(1), callback);
  }
  return false;
}