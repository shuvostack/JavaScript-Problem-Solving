function evenNumbers(numbers) {
    let evenNumbers = []

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if (currentNumber % 2 === 0) {
            evenNumbers.push(currentNumber);
        }
    }

    return evenNumbers;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]));