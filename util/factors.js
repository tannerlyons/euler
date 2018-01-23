
module.exports = {
	factorsOf: (number, primes) => {
		// TODO optimization here to not look so deeply into primes arr based on Math.sqrt(number)
		const maxPrimeFactor = Math.ceil(Math.sqrt(number));
		for (let i = 0; i < number && primes[i] <= maxPrimeFactor; i++) {
			if (Number.isInteger(number / primes[i])) {
				if (!factors.has(i)) {
					factors.set(i, 0);
				}
				factors.set(primes[i], factors.get(primes[i]) + 1);
			
				number /= primes[i];
				i--; // retry that number again.
			}
		}
		return factors;
	},

	// https://en.wikipedia.org/wiki/Fermat's_factorization_method
	fermatFactorization: (num) => {
		let a = Math.ceil(Math.sqrt(num));
		let b2 = a * a - num;
		while (!Number.isInteger(Math.sqrt(b2))) {
			a = a + 1;
			b2 = a * a - num;
		}
		return a - Math.sqrt(b2);
	},

};