function countVowelsAndConsonants(input) {
    const result = {
        vowels : 0 , consonants : 0
    } ;
    const vw = new Set('aeiouAEIOU');
    
    for(const char of input) {
        if(/[a-zA-z]/.test(char)){
            const lower = char.toLowerCase();
            if(vw.has(lower)){
                result.vowels++;
            } else {
                result.consonants++;
            }
        }
    }
    return result;
}
//example usage
const result = countVowelsAndConsonants("Hello World!");
console.log(result);
// Output: { vowels: 3, consonants: 7 }
