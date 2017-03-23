youRadioApp.controller('ProgramCtrl', ProgramCtrl);


ProgramCtrl.$inject = ['$scope','$stateParams', 'programService', '$state'];

function ProgramCtrl($scope, $stateParams, programService, $state) {

  init();

  function init(){
   programService.getProgramsByChannel($stateParams.channelId).then(function(data){
	$scope.programs=data;
   }).catch(function(error){
   	console.log(error);
   });
  }

  $scope.goToProgram = function(programId){
    $state.go("tabsController.programNosFuimos", {"programId":programId.$id});
  }
  
}