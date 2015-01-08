function findPalindromes(str){
    var text = str.toLowerCase().split(/[ .,!?]+/);
    var palindromes = [];

    for(var i = 0; i < text.length; i++){
        var word = text[i].split('').reverse().join('');
        if(text[i].length > 0 && word == text[i]){
            palindromes.push(word);
        }
    }

    console.log(palindromes.join(', '));
}

findPalindromes('There is a man, his name was Bob.');