var mainApp = angular.module("mainApp", []);

mainApp.controller('appController', function($scope, $http){

	$http.get('/personlist').then(function(response){
	console.log('message from controller...')

	console.log("Got the data I requested...")
	$scope.personlist = response.data;
});




});