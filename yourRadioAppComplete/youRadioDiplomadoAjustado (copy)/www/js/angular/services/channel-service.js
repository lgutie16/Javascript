youRadioApp.factory('channelService', channelService); 

channelService.$inject = ['crudfactory'];

function channelService(crudfactory) {

	var channels=[{"id":1, "name":"RadioUno"}, {"id":2, "name":"RCNRadio"}];

    var service = {
        getAll:getAll
    };
    return service;

    function getAll() {
    	return crudfactory.synchronizedModel("channels").$load().then(completeSuccess).catch(completeFail);

    	function completeSuccess(data){
			return data;
    	}

    	function completeFail(error){
			return error;
    	}
    	//return channels;

    };
}