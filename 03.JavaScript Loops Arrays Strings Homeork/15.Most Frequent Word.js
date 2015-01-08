function findMostFrequentWord(str) {
    var text = str.split(/[\W\d]+/);
    var words = text.filter(function(v){return v!==''});

    var wordCount = {};
    var maxWordCount = 1;

    for(var i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase();
        if(!wordCount[words[i]]){
            wordCount[words[i]] = 1;
        } else {
            wordCount[words[i]] += 1;
        }
    }

    for(key in wordCount){
        var value = wordCount[key];
        if(value >= maxWordCount) {
            maxWordCount = value;
        }
    }

    var sortedKeys = Object.keys(wordCount).sort();

    for(var sortedKey in sortedKeys) {
        if(wordCount[sortedKeys[sortedKey]] === maxWordCount) {
            console.log(sortedKeys[sortedKey] + ' -> ' + wordCount[sortedKeys[sortedKey]] + ' times');
        }
    }

    console.log('\n');
}

findMostFrequentWord('in the middle of the night');
findMostFrequentWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFrequentWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');