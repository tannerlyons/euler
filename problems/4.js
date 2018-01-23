/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

// Quick check to see if the 1st and last numbers match.
function isNaivePalindrome(a, b) {
	// Check the 1st and last elements to see if they're the same.
	const s = (a * b).toString();
	return s[0] === s[s.length -1];
}

function checkPalindromeDeeply(num) {
	const s = num.toString();
	for (let i = 0; i < s.length / 2; i++) {
		if (s[i] !== s[s.length - 1 - i]) {
			return false;
		}
	}
	return true;
}

const start = 100;
const end = 999;

let largest = -1;
for (let i = end; i >= start; i--) {
	for (let j = end; j >= start; j--) {
		if (isNaivePalindrome(i, j) && checkPalindromeDeeply(i * j)) {
			largest = Math.max(largest, i * j);
		}
	}
}

console.log(largest);