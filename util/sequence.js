const LinkedList = require("linkedlist-js").List;

module.exports = {
	sum: function(arr) {
		return arr.reduce((sum, n) => sum + n, 0);
	},

	range: function(start, end) {
		const arr = [];
		for (let i = start; i < end; i++) {
			arr.push(i);
		}
		return arr;
	},

	linkedRange: function(start, end) {
		const ll = new LinkedList();
		for (let i = start; i < end; i++) {
			ll.push(i);
		}
		return ll;
	}
};