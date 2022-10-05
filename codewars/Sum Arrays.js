// Sum Numbers
function sum (numbers) {
    let summ = 0;
    for (var i = 0; i < numbers.length; i++) {
        summ += numbers[i];
    }
    if (numbers.length > 0) {return summ;}
    else {return 0;}
};