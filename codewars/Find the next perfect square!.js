function findNextSquare(sq) {
    let sqr = Math.sqrt(sq);
    let nextSqr = sqr + 1;
    let next = Math.pow(nextSqr, 2);
    if (Number.isInteger(sqr) == false) {return -1;}
    else {return next;}
}