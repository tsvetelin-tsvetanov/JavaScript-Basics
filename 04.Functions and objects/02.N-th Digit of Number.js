function findNthDigit(arr){
    var index = arr[0];
    var numbers = arr[1].toString().match(/\d+/g).join('');

    if(index <= numbers.length){
        console.log(numbers[numbers.length - index]);
    } else {
        console.log('The number doesn\'t have '+ index + ' digits');
    }

}

findNthDigit([1, 6] );
findNthDigit([2, -55]);
findNthDigit([6, 923456]);
findNthDigit([3, 1451.78]);
findNthDigit([6, 888.88]);
