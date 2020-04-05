function groupAnimals(animal) {
    var huruf = [];
    for (var i = 0; i < animal.length; i++) {
        huruf.push(animal[i][0]);
    }
    huruf.sort();
    //console.log(huruf);
    var tampung = [];
    for (j = 0; j < huruf.length; j++) {
        if (huruf[j] !== huruf[j + 1]) {
            tampung.push(huruf[j]);
        }
    }
    //console.log(tampung)
    var tampung2 = [];
    for (k = 0; k < tampung.length; k++) {
        var tampung3 = [];
        for (x = 0; x < animal.length; x++) {
            if (animal[x][0] === tampung[k]) {
                tampung3.push(animal[x]);
            }
        }
        tampung2.push(tampung3);
        //console.log(tampung2);
    }
    return tampung2;
}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));