var ko = require('knockout-client'),
	datejs = require('datejs');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfs, lastWtf) {
	this.wtfCount = ko.observable(wtfs);
	this.lastWtf = ko.observable(lastWtf);
	this.lastWtfText = ko.computed(function(argument) {
		return this.lastWtf() || 'never';
	}, this);

	ko.computed(function() {
		localStorage.setItem('wtfs', this.wtfCount());
		localStorage.setItem('lastWtf', this.lastWtf());
	}, this).extend({throttle: 1});
}

ViewModel.prototype.wtf = function() {
	this.wtfCount(this.wtfCount() + 1);
	this.lastWtf(new Date().toString('ddd, MMM dd, yyyy h:mm:ss tt'));
}

ViewModel.prototype.reset = function() {
	this.wtfCount(0);
}

var storedVal = localStorage.getItem('wtfs');
var wtfs = parseInt(storedVal) || 0;
var lastWtf = localStorage.getItem('lastWtf');

var vm = new ViewModel(wtfs, lastWtf);

module.exports = vm;