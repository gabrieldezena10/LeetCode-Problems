/*
Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// function isPalindrome(x: number): boolean {
//   const strPalindrome: string = x.toString().split("").reverse().join("");
//   const numPalindrome: number = Number(strPalindrome);

//   if(numPalindrome === x) return true; 

//   return false;
// };

function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  const strPalindrome = String(x);
  for(let i = 0; i < strPalindrome.length; i ++) {

    if(strPalindrome[i] !== strPalindrome[strPalindrome.length - 1 - i]) 
      return false;
  }
  return true
};


const exA = isPalindrome(51215);
console.log((exA)); //true

const exB = isPalindrome(12345);
console.log(exB); //false

const exC = isPalindrome(-121);
console.log(exC); //false