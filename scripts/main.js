require.config({
  paths: {
    'knockout': '../components/knockout/knockout',
  }
});

require(['viewModel'], function(ViewModel){
	//var wtfs = ko.utils.parseJson(localStorage.getItem('countw.tf-wtfs'));
	new ViewModel('foo');
});
