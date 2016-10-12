youRadioApp.factory('radioService', [radioService]);

function radioService() {
	var radios = [{'radioName': 'radio1', 'id' : 1 }, {'radioName': 'radio2', 'id' : 2}];
	var service = {
		getAll: getAll
	}

	return service;

	function getAll(){
		return radios;
	}
}