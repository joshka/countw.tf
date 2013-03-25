var ko = require('knockout-client'),
	datejs = require('datejs'),
	_ = require('underscore');
ko.mapping = require('knockout-mapping');

function ViewModel(wtfHistory) {
	this.wtfHistory = ko.observableArray(wtfHistory);
	
	this.wtfCount = ko.computed(function() {
		return this.wtfHistory().length;
	}, this);
	
	this.lastWtf = ko.computed(function() {
	 	return _.last(this.wtfHistory());
 	}, this);
	
	this.lastWtfText = ko.computed(function() {
		var lastWtf = this.lastWtf();
		if (lastWtf)
			return formatDate(lastWtf.date);
		return 'never';
	}, this);

	this.todaysWtfs = ko.computed(function() {
		return this.wtfHistory().map(mapDate).filter(isToday);
	}, this);

	this.todayWtfPerMin = ko.computed(function() {
		var today = this.todaysWtfs();
		var first = _.first(today);
		var last = _.last(today);
		var mins = (last - first) / 1000 / 60;
		var count = today.length;
		var wtfPerMin = count / mins || 0;
		return wtfPerMin.toFixed(3);
	}, this);

	this.past24 = ko.computed(function() {
		return this.wtfHistory().map(mapDate).filter(isPast24);
	}, this);

	this.todayWtfCount = ko.computed(function() {
		return this.todaysWtfs().length;
	}, this);

	this.hourlyWtfs = ko.computed(function() {
		var grouped = _.groupBy(this.past24(), mapHour);
		var hourly = [];
		var i, m;
		var offset = new Date().getHours();
		for (i = 0; i < 24; i++) {
			hour = (i + offset + 1) % 24;
			hourly[i] = { hour: hour, wtfs: grouped['' + hour] || [] };
		}
		return hourly;
	}, this);

	this.hourlyVisible = ko.observable(false);

	ko.computed(function() {
		var history = JSON.stringify(this.wtfHistory());
		localStorage.setItem('wtfHistory', history);
	}, this).extend({throttle: 1});
}

ViewModel.prototype.wtf = function() {
	date = new Date();
	this.wtfHistory.push({ date: date });
}

ViewModel.prototype.reset = function() {
	this.wtfHistory.removeAll();
}

ViewModel.prototype.toggleHourlyVisible = function() {
	this.hourlyVisible(!this.hourlyVisible());
}

function mapHour(date) {
	return date.getHours();
}

function mapDate(item) {
	return item.date;
}

function isToday(date) {
	return date.between(Date.today(), Date.parse('tomorrow'));
}

function isPast24(date) {
	return date.compareTo(new Date().add(-1).days()) === 1;
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