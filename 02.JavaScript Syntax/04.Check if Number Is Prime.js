function isPrime(num){
    var isPrime = true;
    var count = 0;
    if(num == 1){
        isPrime = false;
    }
    for(var i = 1; i <= num; i++){
        if(num % i == 0 ){
            count++;
        }
    }
    if(count > 2){
        isPrime = false;
    }
    console.log(isPrime);
}

isPrime(7);
isPrime(254);
isPrime(587);