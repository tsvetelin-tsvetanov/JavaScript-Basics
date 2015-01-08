function biggerThanNeighbours(index, arr){
    var biggest = 0;
    if(index >= arr.length){
        console.log("invalid index");
    } else if(index == 0 || index == arr.length - 1){
        console.log('only one neighbour');
    } else {
        if(arr[index - 1] < arr[index] && arr[index] > arr[index + 1]){
            console.log('bigger');
        } else {
            console.log('not bigger')
        }
    }

}

biggerThanNeighbours(2, [1, 2, 3, 3, 5]);
biggerThanNeighbours(2, [1, 2, 5, 3, 4]);
biggerThanNeighbours(5, [1, 2, 5, 3, 4]);
biggerThanNeighbours(0, [1, 2, 5, 3, 4]);