function targetTerdekat(arr) {
    var indek1 = 0;
    var indek2 = 0;
    var tmp = 0;
    var hasil;
    for (i = 0; i <= arr.length; i++) {
        if (arr[i] == 'o') {
            indek1 = i;
        } else if (arr[i] == 'x') {
            indek2 = i;
            break;
        }

        tmp = (indek2 - indek1) * (-1);
        hasil = tmp + 1;
    }
    return hasil;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x']));