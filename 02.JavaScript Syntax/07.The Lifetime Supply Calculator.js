function calcSupply(age, maxAge, food, foodPerDay) {
    var days = (maxAge - age) * 365;
    var supply = days * foodPerDay;
    var print = supply + "kg of " + food + " would be enough until i am " + maxAge + " years old"
    console.log(print);
}

calcSupply(38, 118, "chocolate", 0.5);
calcSupply(20, 87, "fruits", 2);
calcSupply(16, 102, "nuts", 1.1)