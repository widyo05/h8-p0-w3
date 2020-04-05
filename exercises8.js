function pasanganTerbesar(num) {
    var angka = String(num);
    var hasil = [];
    var tampung;
    var tampil;
    for (i = 0; i < num.length - 1; i++) {
        hasil[i] = angka[i] + angka[i + 1];
    }
    tampung = hasil.sort();
    tampil = Number(tampung[tampung.length - 1]);
    return tampil;
}

console.log(pasanganTerbesar(641573));