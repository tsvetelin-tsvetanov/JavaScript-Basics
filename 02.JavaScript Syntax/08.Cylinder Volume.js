function calcCylinderVol(arr) {
    var volume = Math.PI * (arr[0]*arr[0]) * arr[1];
    volume = Math.round(volume * 1000) / 1000;
    console.log(volume);
}

calcCylinderVol([2, 4]);
calcCylinderVol([5, 8]);
calcCylinderVol([12, 3]);