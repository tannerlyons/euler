/**
Consider the numbers 15, 16 and 18:
15=3×515=3×5 and 3+5=83+5=8.
16=2×2×2×216=2×2×2×2 and 2+2+2+2=82+2+2+2=8.
18=2×3×318=2×3×3 and 2+3+3=82+3+3=8.
15, 16 and 18 are the only numbers that have 8 as sum of the prime factors (counted with multiplicity).

We define S(k)S(k) to be the sum of all numbers nn where the sum of the prime factors (with multiplicity) of nn is kk.
Hence S(8)=15+16+18=49S(8)=15+16+18=49.
Other examples: S(1)=0S(1)=0, S(2)=2S(2)=2, S(3)=3S(3)=3, S(5)=5+6=11S(5)=5+6=11.

The Fibonacci sequence is F1=1,F2=1,F3=2,F4=3,F5=5F1=1,F2=1,F3=2,F4=3,F5=5, ....
Find the last nine digits of ∑k=224S(Fk)∑k=224S(Fk).
*/

const {range, sum} = require('../util/sequence');

// Get a number in the Fibonacci sequence: 1 1 2 3 5 8 ... N 
function genFibTo(n) {
	const arr = [1, 1];
	for(let i = 2; i < n; i++) {
		arr.push(arr[i-2] + arr[i-1]);
	}
	return arr;
}

// Map of number to factors of that number. Cache to speed up generation.
const factorsMap = new Map();
function factorsOf(number, primes) {
	const factors = [];
	let n = number;
	let i = primes[0];
	for (let i = 0; i < n && primes[i] <= n; i++) {
		// console.log(`Checking if ${primes[i]} is a factor of ${n}`);
		// Check the cache first! 
		/*if (factorsMap.has(n)) {
			const cacheVal = factorsMap.get(n);
			console.log('CACHE HIT!', n, cacheVal)
			cacheVal.forEach(f => n /= f);
			factors.splice(0, 0, ...cacheVal);
		}
		else */if (Number.isInteger(n / primes[i])) {
			factors.push(primes[i]);
			// factorsMap.set(n, factors.slice());
		
			n /= primes[i];
			i--; // retry that number again.
		}
	}
	// Cache result
	// console.log('caching', number, factors.slice())
	return factors;
}

function getPrimesUnder(n) {
	// Seive of eratosthenes method:
	const possible = range(2, n);
	// Going to use this array to flag primes as true, marking everything else false.
	const primesTracker = possible.map(() => true);
	possible.forEach((cur, i) => {
		// Check it against all values of possible. If evenly divisible, mark that value false.
		for (let j = i + 1; j < possible.length; j++) {
			if (primesTracker[j]) {
				primesTracker[j] = !Number.isInteger(possible[j] / cur);
			}
		}
	});
	return possible.filter((cur, i) => primesTracker[i]);
}

// Length === 24 because this problem wants to go from F(2) -> F(24)
// This is actually F indices 1 -> 23 inclusive
const fibSeq = genFibTo(24);
const primes = getPrimesUnder(fibSeq[fibSeq.length - 1]);

const factorSumMap = new Map();

console.log('using fibSeq:', fibSeq.slice(0, 5));
console.log('using primes:', primes.slice(0, 5));
console.log();

// Generate factor map from [2, ]
const series = range(2, 8)
	.map(i => fibSeq[i - 1]) // start at F(1)
	.map(fibNum => {
		const factors = factorsOf(fibNum, primes);
		console.log(`factors of ${fibNum}:`, factors)
		console.log(factorsMap)
		console.log();
		return sum(factors);
	});

console.log("series", series);
console.log("seriesSum", sum(series));
