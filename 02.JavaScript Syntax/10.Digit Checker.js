function checkDigit(num) {
    num = parseInt(num / 100);
    return num % 10 == 3;
}

console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));