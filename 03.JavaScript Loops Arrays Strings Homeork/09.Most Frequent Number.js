function mostFrequentNumber(arr){
    var counter = 0;
    var counterMax = 0;
    var num = '';


    for(var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }

        if (counter > counterMax) {
            num = arr[i];
            counterMax = counter;
        }


        counter = 0;
    }

    console.log(num + " (" + counterMax + " times)");
}

mostFrequentNumber([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
mostFrequentNumber([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
mostFrequentNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
