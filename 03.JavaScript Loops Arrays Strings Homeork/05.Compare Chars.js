function compareChars(arr1, arr2){
    var result = 'equal';

    if(arr1.length == arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                result = 'not equal'
            }
        }
    } else {
        result = 'not equal';
    }

    console.log(result);
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
        ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']
);

compareChars(['3', '5', 'g', 'd'],
        ['5', '3', 'g', 'd']

);

compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
        ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']

);
