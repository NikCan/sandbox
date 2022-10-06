function tea42(input) {
  let str = input.toString();
  let output = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '2') { output += 't'; }
    else { output += str[i]; }
  }
  return output;
}
