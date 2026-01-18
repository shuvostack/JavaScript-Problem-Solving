function countVowels(string) {
    let count = 0;
    const vowels = 'aeiou';

    for (let vowel of string) {
        if (vowels.includes(vowel)) {
            count++
        }
    }

    return count;
}

console.log(countVowels("Mehedi Hasan Shuvo"));