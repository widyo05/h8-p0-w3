function perkalianUnik(arr) {
    var tampung = [];
    for (i = 0; i < arr.length; i++) {
        kali = 1;
        for (j = 0; j < arr.length; j++) {
            if (i !== j) {
                kali *= arr[j];

            }
        }
        tampung.push(kali);
    }
    return tampung;
}
console.log(perkalianUnik([2, 4, 6]));