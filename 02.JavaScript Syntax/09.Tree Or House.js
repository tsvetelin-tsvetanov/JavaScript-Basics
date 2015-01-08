function treeHouseCompare(a, b) {
    var house = a * a + a * a * 2 / 6;

    var treeCrown = (b / 3) * 2;
    var tree = b * (b/3) + Math.PI * treeCrown * treeCrown;
    var printA = "house/";
    var printB = "tree/";

    if (house > tree) {
        return 'house/' + house.toFixed(2);
    } else if (house < tree) {
        return 'tree/' + tree.toFixed(2);
    } else {
        return 'equal/' + house.toFixed(2);
    }
}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));