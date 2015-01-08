function findMaxSequence(arr) {
    var max = [[arr[0]]];
    var current = [arr[0]];

    for (var i = 1; i < arr.length; i++) {

        if (i == arr.length - 1) {
            if (arr[i] === arr[i - 1]) {
                current.push(arr[i]);
            }
            if (current.length >= max[0].length) {
                max = [];
                max.push(current);
            }
        }
        else if (arr[i] === arr[i - 1]) {
            current.push(arr[i]);
        } else {
            if (current.length >= max[0].length) {
                max = [];
                max.push(current);
            }

            current = [arr[i]];
        }
    }

    console.log(max.join(' '));
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);