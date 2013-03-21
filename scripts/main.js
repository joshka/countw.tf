require.config({
  paths: {
    'knockout': '../components/knockout/build/output/knockout-latest',
  }
});

require(['viewModel'], function(ViewModel){
	//var wtfs = ko.utils.parseJson(localStorage.getItem('countw.tf-wtfs'));
	new ViewModel('foo');
});
