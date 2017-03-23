youRadioApp.factory('registerService', registerService); 

registerService.$inject = [];

function registerService() {

    var service = {
        register: register
    };
    return service;

    function register(username, password) {
    return "ok";
    };
}