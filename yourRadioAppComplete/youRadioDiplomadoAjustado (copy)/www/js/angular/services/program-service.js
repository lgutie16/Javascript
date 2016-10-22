youRadioApp.factory('programService', programService); 

programService.$inject = ['crudfactory'];

function programService(crudfactory) {

	var programs=[{"idChannel":"1","id":1, "name":"Todos con Todos"}, {"idChannel":"2","id":2, "name":"Nos fiumos"}];

    var service = {
        getAll:getAll,
        getProgramsByChannel:getProgramsByChannel,
        getMessagesByProgram:getMessagesByProgram
    };
    return service;

    function getAll() {
        return programs;
    };

    function getProgramsByChannel(channelId) {
        return crudfactory.synchronizedModel("programs").$load().then(completeSuccess).catch(completeFail);

        function completeSuccess(data){
            var filter=data.$filterEqual("idChannel",channelId );
            return filter;
        }

        function completeFail(error){
            return error;
        }
    };

    function getMessagesByProgram(programmId) {
        return crudfactory.synchronizedModel("messagesprogram", programmId, "messages").$load().then(completeSuccess).catch(completeFail);

        function completeSuccess(data){
            return data;
        }

        function completeFail(error){
            return error;
        }
    };
}