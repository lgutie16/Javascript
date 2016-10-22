youRadioApp.controller('LoginCtrl', LoginCtrl);


LoginCtrl.$inject = ['$scope', '$state', 'loginService'];

function LoginCtrl($scope, $state, loginService) {

  
  getUsers();

  function getUsers() {
      loginService.getSynchronizedUsers().then(function(data){
        $scope.users = data;
      }).catch(function(error){
        console.log(error);
      }); 
  }

  $scope.submit = function() {
    if ($scope.userForm.$invalid) {
      return;
    }
    if ($scope.userForm.$valid) {
     //alert('es valida');
      loginService.login($scope.username, $scope.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              alert("Perfecto");
              //$cookies.put("username", $scope.username);
              $state.go('channels');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    }
  };

  $scope.newUserSubmit = function() {
    if ($scope.registerForm.$invalid) {
      return;
    }
    if ($scope.registerForm.$valid) {

      if(!angular.equals($scope.registerForm.password, $scope.registerForm.passwordC)){
        alert("El password no coincide");
        return;
      }

     //alert('es valida');
      loginService.register($scope.registerForm.username, $scope.registerForm.password).then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
               var jsonData={};
              jsonData["name"]="none";
              $scope.users.$set($scope.registerForm.username,jsonData);
              alert("Perfecto ya puedes ingresar");
              $state.go('login');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    }
  };

  
}