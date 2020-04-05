function angkaPalindrome(num) {
    var angka = String(num)
    var tampung = '';
    for (i = 0; i < num; i++) {
        num++;
        for (j = angka.length - 1; j >= 0; j--) {
            tampung += angka[j];
        }
        if (angka === tampung) {
            return num;
        }
    }
}
console.log(angkaPalindrome(8)); // 9