youRadioApp.factory('loginService',  loginService); 

loginService.$inject = ['localStorageService'];

function loginService(localStorageService) {

    var service = {
        login: login
    };
    return service;

    function login(username, password) {
    	localStorageService.set("token",  username);
    };
}