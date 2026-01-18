function reverseString(str) {
    let split = str.split('');

    const reverse = split.reverse();

    const join = reverse.join('');

    return join;
}
console.log(reverseString('Hello'));