youRadioApp.controller('InitCtrl', InitCtrl);

InitCtrl.$inject = ['$scope', '$state', 'loginService'];

function InitCtrl($scope, $state, loginService) {

  $scope.goToregister = function(){
  	//alert('Hola');
  	$state.go('register');
  }

  $scope.goToLogin = function(){
    //alert('Hola');
    $state.go('login');
  }

  $scope.loginfacebook = function(){
    loginService.loginfacebook().then(function (authData) {
          if(authData){
            if(angular.isDefined(authData.code)){
              alert(authData.message);
            }else{
              alert("Perfecto");
              $state.go('channels');   
            }
            
          }
        }).catch(function (error) {
          if(error){
            alert("No fue posible el logueo");
          }
        });   
    
  }

}