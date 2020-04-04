function hitungJumlahKata(kalimat) {
    var spasi = 1;
    for (i = 0; i <= kalimat.length - 1; i++) {
        if (kalimat[i] === ' ') {
            spasi++;
        }
    }
    return spasi;
}
console.log(hitungJumlahKata('I have a dream'));