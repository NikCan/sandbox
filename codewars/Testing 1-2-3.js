var number=function(array){
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
    let i2 = i + 1;  
    let newMember = i2 + ": " + array[i]; 
    newArr.push(newMember);
      }
      return newArr;
    }