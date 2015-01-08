function countSubstringOccur(arr){
    var key = arr[0].toLowerCase();
    var string = arr[1].toLowerCase().split(' ');
    var count = 0;

    for(var i = 0; i < string.length; i++){
        if(string[i].indexOf(key) != -1){
            count++;
        }
    }

    console.log(count);
}

countSubstringOccur(['in',
    'We are living in a yellow submarine. ' +
        'We don\'t have anything else. Inside the submarine is very tight. ' +
        'So we are drinking all the day. We will move out of it in 5 days.']);

countSubstringOccur(['your', 'No one heard a single word you said. ' +
    'They should have seen it in your eyes. ' +
    'What was going around your head.']);

countSubstringOccur(['but', 'But you were living in another world tryin\' to get your message through.']);

console.log("Относно първия пример предполагам в даденият ни output има грешка, три пъти броих 'in'-овете" +
    "и все до 8 го докарвам");