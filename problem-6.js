function sumOfArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i]

        sum = sum + currentNumber;
    } 

    return sum;
};

console.log(sumOfArray([1, 2, 3, 4]));