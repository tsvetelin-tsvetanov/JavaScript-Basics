function convertKWtoHP(carKw){
    var carHp = carKw * 1.3410220888;
    return Math.round(carHp * 100) / 100;
}

console.log(convertKWtoHP(75));
console.log(convertKWtoHP(150));
console.log(convertKWtoHP(1000));