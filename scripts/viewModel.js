var ko = require('knockout-client'),
	datejs = require('datejs');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfs) {
	this.wtfCount = ko.observable(wtfs);
	ko.computed(function() {
		localStorage.setItem('wtfs', this.wtfCount());
		localStorage.setItem('lastWtf', new Date());
	}, this).extend({throttle: 1});
	this.lastWtf = ko.computed(function() {
		var c = this.wtfCount();
		if (!c)
			return "never";
		return new Date().toString('yyyy-MM-dd HH:mm:ss');
	}, this);
}

ViewModel.prototype.wtf = function() {
	var currentWtfs = this.wtfCount();
	this.wtfCount(currentWtfs + 1);
}

ViewModel.prototype.reset = function() {
	this.wtfCount(0);
}

var storedVal = localStorage.getItem('wtfs');
var wtfs = parseInt(storedVal) || 0;
var vm = new ViewModel(wtfs);

module.exports = vm;
