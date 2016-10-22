youRadioApp.controller('ChatCtrl', ChatCtrl);

ChatCtrl.$inject = ['$scope' ,'$stateParams',  '$state', 'chatService'];

function ChatCtrl($scope, $stateParams,$state, chatService){
	init();

	function init(){
		chatService.getAll($stateParams.programId).then(function(data){
			$scope.messages = data;
			$scope.programName = $stateParams.programId;
		}).catch(function(error){
			console.log(error);
		});
	}
}

