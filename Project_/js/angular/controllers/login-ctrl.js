youRadioApp.controller('LoginCtrl', LoginCtrl);

 LoginCtrl.$inject = ['$scope', '$state', 'loginService'];

  function LoginCtrl($scope, $state, loginService) {
    $scope.submit = function () {
    var response=loginService.login($scope.username, $scope.password);
         if(response=="ok"){
          alert("funciona")
         }else{
          alert('¿Que mierdas?');
         } 
      $state.go('login');
     }
    $scope.accion = "Linda Gutiérrez";    
  }