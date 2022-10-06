function isFlush(cards) {
  let init1 = '';
  let init2 = '';
  let init3 = '';
  let init4 = '';
  let init5 = '';
  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      init1 = cards[0].slice(-1);
      init2 = cards[1].slice(-1);
      init3 = cards[2].slice(-1);
      init4 = cards[3].slice(-1);
      init5 = cards[4].slice(-1);
      }
    }
  return (init1==init2 && init2==init3 && init3==init4 && init4==init5 && init5==init1)  
}