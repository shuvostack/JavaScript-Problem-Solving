function palindrome(str) {
    let split = str.split('');

    const reverse = split.reverse();

    const join = reverse.join('');

    if (str === join) {
        return true;
    }
    else {
        return false;
    }
};

console.log(palindrome('madam'));