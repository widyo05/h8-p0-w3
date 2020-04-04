function mengelompokkanAngka(arr) {
    var ganjil = [];
    var genap = [];
    var kelipatan = [];
    var tampung = [];

    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 === 0 && arr[i] % 3 !== 0) {
            genap.push(arr[i]);

        } else if (arr[i] % 2 !== 0 && arr[i] % 3 !== 0) {
            ganjil.push(arr[i]);

        } else if (arr[i] % 3 === 0) {
            kelipatan.push(arr[i]);

        }

    }
    tampung.push(genap);
    tampung.push(ganjil);
    tampung.push(kelipatan);
    return tampung;

}
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));