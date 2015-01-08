function printNumber(num){
    var numbers = [];

    if(num < 1){
        console.log("no");
    } else {
        for(var i = 1; i <= num; i++){
            if(i % 4 != 0 && i % 5 != 0){
                numbers.push(i);
            }
        }

        console.log(numbers.join(', '));
    }
}

printNumber(20);
printNumber(-5);
printNumber(13);