function reverseString(str){
    var num = str.length - 1;
    var word = '';

    for(var i = num; i > -1; i--){
        word += str[i];
    }

    console.log(word);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');