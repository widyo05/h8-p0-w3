function cariMean(arr) {
    var hitung = 0;
    var mean = 0;
    var jumlah = arr.length;
    for (i = 0; i <= arr.length - 1; i++) {
        hitung += arr[i];
    }
    mean = Math.ceil(hitung / jumlah);
    return mean;
}
console.log(cariMean([1, 2, 3, 4, 5]));