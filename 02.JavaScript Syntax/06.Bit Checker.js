function bitChecker(num){
    var isTrue = true;
    if(((num >> 3) & 1) != 1){
        isTrue = false;
    }
    console.log(isTrue);
}

bitChecker(333);
bitChecker(425);
bitChecker(2567564754);