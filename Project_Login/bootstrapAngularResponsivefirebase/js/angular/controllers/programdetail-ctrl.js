youRadioApp.controller('ProgramDetailCtrl', ProgramDetailCtrl);

ProgramDetailCtrl.$inject = ['$scope','$stateParams', 'programService', '$cookies'];

function ProgramDetailCtrl($scope, $stateParams, programService,$cookies) {

  loadMessages();

  function loadMessages(){
   programService.getMessagesByProgram($stateParams.programId).then(function(data){
	   $scope.messages=data;
   }).catch(function(error){
   	console.log(error);
   });
  }

  $scope.addMessage=function(text){
    var message={};
    message.message=text;
    message.username=$cookies.get("username");
    $scope.messages.$add(message);
  }
  
}