var ko = require('knockout-client'),
	datejs = require('datejs');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfHistory) {
	this.wtfHistory = ko.observableArray(wtfHistory);
	this.wtfCount = ko.computed(function() {
		return this.wtfHistory().length;
	}, this);
	this.lastWtf = ko.computed(function() {
	 	return this.wtfHistory()[0];
 	}, this);
	this.lastWtfText = ko.computed(function(argument) {
		var lastWtf = this.lastWtf();
		if (lastWtf)
			return formatDate(lastWtf.date);
		return 'never';
	}, this);

	ko.computed(function() {
		var history = JSON.stringify(this.wtfHistory());
		localStorage.setItem('wtfHistory', history);
	}, this).extend({throttle: 1});
}

ViewModel.prototype.wtf = function() {
	date = new Date();
	this.wtfHistory.unshift({ date: date });
}

ViewModel.prototype.reset = function() {
	this.wtfHistory.removeAll();
}

function fixDate(key, value){
	return (key === 'date') ? new Date(value) : value;
}

function formatDate(date) {
	return date.toString('ddd, MMM dd, yyyy h:mm:ss tt');
}

var storedHistory = localStorage.getItem('wtfHistory');
var wtfHistory = JSON.parse(storedHistory, fixDate) || [];
var vm = new ViewModel(wtfHistory);

module.exports = vm;