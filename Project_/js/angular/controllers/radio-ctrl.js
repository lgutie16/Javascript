youRadioApp.controller('RadioCtrl', RadioCtrl);

RadioCtrl.$inject = ['$scope', '$state', 'radioService'];

function RadioCtrl($scope, $state, radioService){
	init();

	function init(){
		$scope.radios = radioService.getAll();
	}

	$scope.showPrograms = function(radio){
		$state.go("programs", {"programId": radio.id});
	}
}