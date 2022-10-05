function wordsToMarks(string){
  let sum = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == 'a') {sum = sum + 1;}
    else if (string[i] == 'b') {sum = sum + 2;}
    else if (string[i] == 'c') {sum = sum + 3;}
    else if (string[i] == 'd') {sum = sum + 4;}
    else if (string[i] == 'e') {sum = sum + 5;}
    else if (string[i] == 'f') {sum = sum + 6;}
    else if (string[i] == 'g') {sum = sum + 7;}
    else if (string[i] == 'h') {sum = sum + 8;}
    else if (string[i] == 'i') {sum = sum + 9;}
    else if (string[i] == 'j') {sum = sum + 10;}
    else if (string[i] == 'k') {sum = sum + 11;}
    else if (string[i] == 'l') {sum = sum + 12;}
    else if (string[i] == 'm') {sum = sum + 13;}
    else if (string[i] == 'n') {sum = sum + 14;}
    else if (string[i] == 'o') {sum = sum + 15;}
    else if (string[i] == 'p') {sum = sum + 16;}
    else if (string[i] == 'q') {sum = sum + 17;}
    else if (string[i] == 'r') {sum = sum + 18;}
    else if (string[i] == 's') {sum = sum + 19;}
    else if (string[i] == 't') {sum = sum + 20;}
    else if (string[i] == 'u') {sum = sum + 21;}
    else if (string[i] == 'v') {sum = sum + 22;}
    else if (string[i] == 'w') {sum = sum + 23;}
    else if (string[i] == 'x') {sum = sum + 24;}
    else if (string[i] == 'y') {sum = sum + 25;}
    else if (string[i] == 'z') {sum = sum + 26;}
}
  return sum;
  }