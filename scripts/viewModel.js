var ko = require('knockout');

var ViewModel = function() {
	var self = this;
	//var wtfInit = localStorage.getItem('wtfCount') || 0;
	self.wtfCount = ko.observable(0);
	self.wtf = function() {
		self.wtfCount(self.wtfCount()+1);
		//localStorage.setItem('wtfCount', self.wtfCount());
	}
}

module.exports = new ViewModel();
