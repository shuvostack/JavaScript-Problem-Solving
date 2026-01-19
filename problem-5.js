function removeDuplicates(numbers) {
    let uniqueNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        let currentNumber = numbers[i];

        if(uniqueNumbers.includes(currentNumber) === false) {
            uniqueNumbers.push(currentNumber);
        }
    }

    return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));