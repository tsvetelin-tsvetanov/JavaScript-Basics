function replaceSpaces(str) {
    var text = str;
    text = text.replace(/\s+/g, '');
    console.log(text);
}

replaceSpaces('But you were living in another world tryin\' to get your message through.');