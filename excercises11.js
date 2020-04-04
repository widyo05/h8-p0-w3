function tentukanDeretAritmatika(arr) {

    var beda;
    for (i = 0; i <= arr.length; i++) {
        beda = arr[arr.length - 1] - arr[arr.length - 2];
        if (arr[2] - arr[1] === beda) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6]));
console.log(tentukanDeretAritmatika([2, 6, 18, 54]));



