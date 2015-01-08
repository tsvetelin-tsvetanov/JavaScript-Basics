function createArray(){
    var nums = new Array(20);

    for(var i = 0; i < nums.length; i++ ){
        nums[i] = i * 5;
    }

    console.log(nums.join(' '));
}

createArray();