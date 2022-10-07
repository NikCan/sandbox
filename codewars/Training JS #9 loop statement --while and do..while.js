function padIt(str, n) {
  let i = 0;
  while (i < n) {
    str = '*' + str;
    i = i + 2;
  }
  let j = 1;
  while (j < n) {
    str = str + '*';
    j = j + 2;
  }
  return str;
}