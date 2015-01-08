function findMaxSequence(arr) {
    var sequence = [arr[0]];
    var maxSequence = [];

    for(var i = 1; i < arr.length; i++){
        if(i == arr.length - 1 && arr[i] > arr[i - 1]){
            sequence.push(arr[i]);
            maxSequence.push(sequence);
        } else if(arr[i] > arr[i-1]){
            sequence.push(arr[i]);
        } else {
            maxSequence.push(sequence);
            sequence = [];
            sequence.push(arr[i]);
        }
    }

    maxSequence.sort(function (a,b) {
        return b.length - a.length;
    });

    if(maxSequence[0].length > 1 ){
        console.log(maxSequence[0]);
    } else {
        console.log("no");
    }
}

findMaxSequence([3, 2, 3, 4, 2, 2, 4]	);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
