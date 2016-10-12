youRadioApp.controller('ProgramCtrl', ProgramCtrl);

ProgramCtrl.$inject = ['$scope', 'programService', '$stateParams'];

function ProgramCtrl($scope, programService,$stateParams){

	init()

	function init(){
		$scope.programs = programService.getProgramasByEmisora($stateParams.programId);
	}

}

