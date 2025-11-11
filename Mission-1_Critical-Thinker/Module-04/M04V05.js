//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false

//* Space complexity = O(n)
//* Time complexity = O(n)
const isPalindrome = (str) => {
    const start = performance.now();
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = normalized.split('').reverse().join('');
    const end = performance.now();
    console.log(end - start);
    
    if (normalized === reversed) return true;

    return false;
}

// console.log(isPalindrome('A man, a plan, a canal: Panama'))

//* Space complexity = O(n)
//* Time complexity = O(n)
//* this is space efficient
const isPalindromeTwoPointer = (str) => {
    const start = performance.now();
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = normalized.length - 1;

    //* time complexity = O(m/2)
    while (left < right) {
        if (normalized[left] !== normalized[right]) return false;

        left++;
        right--;
    }
    const end = performance.now();
    console.log(end - start);

    return true
}

console.log(isPalindromeTwoPointer('A man, a plan, a canal: Panama'))