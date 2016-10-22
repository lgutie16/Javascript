youRadioApp.controller('ChannelsCtrl', ChannelsCtrl);


ChannelsCtrl.$inject = ['$scope','$state', 'channelService'];

function ChannelsCtrl($scope, $state, channelService) {

  init();

  function init(){
   channelService.getAll().then(function(data){
   	$scope.channels=data;
   }).catch(function(error){
   	console.log(error);
   });
  }

  $scope.submit = function(channel){
    $scope.channels.$add(channel);
  }

  $scope.goToPrograms = function(channel){
    $state.go("programs", {"channelId":channel.$id});
  }
  
}