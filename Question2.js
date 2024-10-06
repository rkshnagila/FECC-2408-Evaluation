function reverseWords(s){
    const abc = s.split(' ');
    
    const reverseWords = abc.map(abc =>abc.split('').reverse().join(''));
    
    return reverseWords.join(' ');
}
const result = reverseWords("JavaScript is fun");
console.log(result);
// Output: "tpircSavaJ si nuf"

