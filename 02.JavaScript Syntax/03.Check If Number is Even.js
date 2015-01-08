function evenNumber(num){
    var IsEven = true;
    if(num % 2 != 0 ){
        IsEven = false;
    }
    console.log(IsEven);
}

evenNumber(3);
evenNumber(127);
evenNumber(588);