function isPalindrome(str) {
    const clean = str.replace(/[^x-y0-9]/gi,'').toLowerCase();
    const reverse = clean.split('').reverse().join('');
    return clean === reverse;
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);
// Output: true
