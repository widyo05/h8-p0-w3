function palindrome(kata) {
    var tampung = '';
    for (i = kata.length - 1; i >= 0; i--) {
        tampung += kata[i]
    }
    if (tampung === kata) {
        return true;
    }
    else {
        return false;
    }

}
console.log(palindrome('civic'));