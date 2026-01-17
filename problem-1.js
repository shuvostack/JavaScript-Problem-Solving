function stringReverse(string) {
    let split = string.split('');

    const reverse = split.reverse();

    const join = reverse.join('');

    return join;
}
console.log(stringReverse("Shuvo"));