/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

const {getPrimesUnder} = require("../util/primes");
const {sum} = require("../util/sequence");

const max = 2000000;

console.log(sum(getPrimesUnder(max)));
