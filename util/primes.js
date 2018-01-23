const _ = require("lodash");

const {linkedRange} = require("./sequence");

module.exports.getPrimesUnder = function(n) {
	// Seive of eratosthenes method optimized with a linked list.
	const possible = linkedRange(2, n);
	const primes = [];
	console.log('getting primes between 2 and ', possible.tail().value())
	
	// mem alloc... kinda.
	let curNode = possible.head();
	let prev = null;
	let next = null;
	let scannerNode = null;

	while (!curNode.isTail()) {
		scannerNode = curNode.next();
		while (!scannerNode.isTail()) {
			// console.log('testing:', scannerNode.value(), curNode.value())
			// if (Number.isInteger(scannerNode.value() / curNode.value())) {
			if (scannerNode._value % curNode._value === 0) {
				// pop the scanner node, it's a composite and continue;
				prev = scannerNode._previous;
				next = scannerNode._next;
				scannerNode._next = null;
				scannerNode._previous = null;
				prev._next = next;
				next._previous = prev;
				scannerNode = prev;
			}
			scannerNode = scannerNode._next;
		}
		curNode = curNode._next;
	}

	console.log("done calculating primes! ", possible.size(), " found.");
	return possible.asArray();
}

// https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test
const TEST_MAP = [
	[2047, 				[2]],
	[1373653, 			[2, 3]],
	[9080191, 			[31, 73]],
	[25326001, 			[2, 3, 5]],
	[3215031751, 		[2, 3, 5, 7]],
	[4759123141], 		[2, 7, 61],
	[1122004669633, 	[2, 13, 23, 1662803]],
	[2152302898747, 	[2, 3, 5, 7, 11]],
	[3474749660383, 	[2, 3, 5, 7, 11, 13]],
	[341550071728321, 	[2, 3, 5, 7, 11, 13, 17]],
];
// Following pseudocode from wikipediapage#Computational_complexity
/**
 * @param maxPrime The maximum number we'll be testing. We use this to reduce complexity.
 */
module.exports.millerRabinPrimalityTest = function(maxPrime){
	// tests === a
	const tests = TEST_MAP.find((upTo) => {
		return maxPrime < upTo[0];
	});
	console.log('For up to', maxPrime, 'we\'re using tests', tests[1]);

	return _.partial(tests[1], function(tests, num) {
		let nMinus1 = num -1;
		let tmpS = 0;
		while (nMinus1 % 2 === 0) {
			tmpS++;
			nMinus1 /= 2;
		}
		// s is the power of 2 we can divide into num - 1
		const s = tmpS;
		// d is the remainder such that 2^s * d + 1 === num
		const d = nMinus1;

		for (let i = 0; i < tests.length; i++) {
			const a = tests[i];
			if (Math.pow(a, d) % num !== 1 % num) {
				for (let r = 0; r <= s - 1; r++) {
					// TODO
					// if () {

					// }
				}
			}
		}
		return true;
	});
}