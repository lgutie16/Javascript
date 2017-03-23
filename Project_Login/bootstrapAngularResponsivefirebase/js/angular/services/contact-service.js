youRadioApp.factory('contactService', contactService); 

contactService.$inject = [];

function contactService() {

	var contacts=[];

    var service = {
        add: add,
        getAll:getAll
    };
    return service;

    function add(contact) {
  		contacts.push(contact);
        return "ok";
    };

    function getAll() {
        return contacts;
    };
}