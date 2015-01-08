function reverseEveryWord(str){
    var words = str.split(' ');
    var result = "";

    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('');
        result += ' ';
    }

    console.log(result.trim());
}

reverseEveryWord('Hello, how are you.');
reverseEveryWord('Life is pretty good, isn’t it?');