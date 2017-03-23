youRadioApp.controller('ContactCtrl', ContactCtrl);


ContactCtrl.$inject = ['$scope', 'contactService'];

function ContactCtrl($scope, contactService) {

  init();

  function init(){
   $scope.contacts=contactService.getAll();
  }
  $scope.submit = function() {
    var contact={'username':$scope.username};
    contactService.add(contact);
    $scope.contacts=contactService.getAll();
  }

  $scope.delete = function(contact) {
    $scope.contacts = contactService.remove(contact);
  }
}