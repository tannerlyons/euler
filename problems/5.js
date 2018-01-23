/*
2520 is the smallest number that can be divided by each 
of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?
*/


function isDivisibleByAll(number, nums) {
	return nums.every(n => Number.isInteger(number / n));
}

const nums = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11];

const min = 20 * 11 * 19;
const max = Infinity;

for (let i = min; i < max; i++) {
	if (isDivisibleByAll(i, nums)) {
		console.log(i)
		break;
	}
}