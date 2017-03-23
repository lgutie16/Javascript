youRadioApp.factory('programService', [programService]);

function programService(){
	var programs = [{'idE': '1', 'programName' : 'Program 1 Radio 1'}, 
					{'idE': '2', 'programName' : 'Program 1 Radio 2'}];

	var listProgramas=[];

	var service = {
		getAll: getAll,
		getProgramasByEmisora: getProgramasByEmisora
	}

	return service;

	function getAll(){
		return programs;
	}

	function getProgramasByEmisora(radioId){
		
		for(var i=0;i<programs.length;i++ ){
			var programa=programs[i];
			if(angular.equals(programa.idE,radioId)){
				listProgramas.push(programa);
			}
		}
		return listProgramas;
	}
}