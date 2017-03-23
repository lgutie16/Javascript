youRadioApp.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$scope','$state', 'registerService'];

	
function RegisterCtrl($scope, $state, registerService) {
	$scope.submit = function () {
		var response=registerService.register($scope.username, $scope.password);
	     if(response=="ok"){
	      alert("Perfecto")
	     }else{
	      alert('No existe');
	     } 
			$state.go('login');
	 }
	 $scope.accion = "Registrer";
	 $scope.phones = [
	 {'name': 'Nexus S',
	  'snippet': 'Fast just got faster with Nexus S.'},
	 {'name': 'Motorola XOOM™ with Wi-Fi',
	  'snippet': 'The Next, Next Generation tablet.'},
	 {'name': 'MOTOROLA XOOM™',
	  'snippet': 'The Next, Next Generation tablet.'}
	];
}