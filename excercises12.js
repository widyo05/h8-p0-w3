function tentukanDeretGeometri(arr) {
    var beda;
    for (i = 0; i <= arr.length - 1; i++) {
        beda = arr[arr.length - 1] / arr[arr.length - 2]
        if (arr[1] / arr[0] === beda) {
            return true;
        }
        else {
            return false;
        }
    }

}

console.log(tentukanDeretGeometri([1, 3, 9, 27, 81]));
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32]));
console.log(tentukanDeretGeometri([2, 4, 6, 8]));
