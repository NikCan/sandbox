function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let height = 0;
  let days = 1;
  for (; (height + upSpeed) < desiredHeight;) {
        height = height + upSpeed - downSpeed;
        days +=1 ;
  }
  return days;

  }