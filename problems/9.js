/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/


function isPythagoreanTriplet(a, b, c) {
	return a * a + b * b === c * c;
}

function sumsTo1000(a, b, c) {
	return a + b + c === 1000;
}


// NAIIIIIIIIIVE :)
function* comboGenerator() {
	for (let i = 1; i < 1000; i++) {
		for (let j = 1; j < 1000; j++) {
			for (let k = 1; k < 1000; k++) {
				if (sumsTo1000(i, j, k)) {
					yield [i, j, k];
				}
			}
		}
	}
}

for (let combo of comboGenerator()) {
	if (isPythagoreanTriplet(...combo)) {
		console.log(combo.reduce((agg, n) => agg * n, 1));
	}
}