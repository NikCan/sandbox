function vaporcode(string) {
  let output = '';
  let answer = '';
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] == ' ') { }
    else { output += string[i].toUpperCase() + '  ' }
  }
  if (string[string.length - 1] == ' ') { }
  else { answer = output + string[string.length - 1].toUpperCase() }

  return answer;
}
