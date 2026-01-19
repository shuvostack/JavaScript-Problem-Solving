function capitalizeFirstLetter(str) {
    let split = str.split(' ');
    let result = []

    for (let i = 0; i < split.length; i++) {
        let currentWord = split[i]

        const firstLetter = currentWord[0].toUpperCase();
        const dueWords = currentWord.slice(1);
        const updatedWord = firstLetter + dueWords;

        result.push(updatedWord);
    }

    return result.join(' ')
}

console.log(capitalizeFirstLetter('mehedi hasan shuvo'))