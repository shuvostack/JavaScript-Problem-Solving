function findMax(numbers) {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (currentNumber > max) {
            max = currentNumber;
        }
    }
    return max;
}

console.log(findMax([1, 5, 7, 16, 3, 2]))