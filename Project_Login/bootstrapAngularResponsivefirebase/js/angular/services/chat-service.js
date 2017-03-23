youRadioApp.factory('chatService',chatService);

chatService.$inject = ['crudfactory'];

function chatService (crudfactory) {
	var service = {
		getAll: getAll
	};

	return service;

	function getAll(programId){

		return crudfactory.synchronizedModel("messagesprogram", programId, "messages").$load().then(completeSuccess).catch(completeFail);
		function completeSuccess(data){
			return data;
		}

		function completeFail(error){
			return error;
		}
	}

}