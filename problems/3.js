/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600,851,475,143 ?
*/

const _ = require("lodash");

const {factorsOf, fermatFactorization} = require("../util/factors");
const {getPrimesUnder} = require("../util/primes");

const NUM_TO_TEST = 600851475143;

const primes = getPrimesUnder(Math.ceil(Math.sqrt(NUM_TO_TEST)));
console.log(' Got primes:', primes);

for (let i = primes.length - 1; i >= 0; i--) {
	const primeToCheck = primes[i];
	if (Number.isInteger(NUM_TO_TEST / primeToCheck)) {
		console.log(primeToCheck);
		break;
	}
}
