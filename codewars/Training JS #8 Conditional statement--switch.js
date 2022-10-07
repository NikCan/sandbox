function howManydays(month) {
  var days;
  switch (month) {
    default:
      days = 31;
      break;

    case 4:
      days = 30;
      break;

    case 6:
      days = 30;
      break;

    case 9:
      days = 30;
      break;

    case 11:
      days = 30;
      break;

    case 2:
      days = 28;
      break;

  }
  return days;
}
