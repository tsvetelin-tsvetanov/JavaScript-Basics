function divisionBy3(num){
    var thirdDigit = num % 10;
    var secondDigitCheck = num / 10;
    var secondDigit = secondDigitCheck % 10;
    secondDigit = Math.floor(secondDigit);
    var firstDigitCheck = num / 100;
    var firstDigit = firstDigitCheck % 10;
    firstDigit = Math.floor(firstDigit);
    var sum = firstDigit + secondDigit + thirdDigit;
    if(sum % 3 == 0){
        console.log("the number is divided by 3 without remainder");
    }
    else {
        console.log("the number is not divided by 3 without remainder");
    }
}

divisionBy3(12);
divisionBy3(188);
divisionBy3(591);