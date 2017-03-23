youRadioApp.factory('contactService',[contactService]  ); 

function contactService() {

    var contacts = [];
    var service = {
    	add: add,
    	getAll: getAll,
    	remove: remove
    };

    return service;

    function add(contact){
    	contacts.push(contact);
    	return "ok";
    }

    function getAll() {
    return contacts;
    }

    function remove(contact){
    	var index = contacts.indexOf(contact);
    	if(index > -1){
    		contacts.splice(index,1);
    	}
    }
}