youRadioApp.factory('loginService', loginService); 

loginService.$inject = ['$firebaseAuth', 'ref', 'CONFIG', 'crudfactory'];

function loginService($firebaseAuth, ref, CONFIG, crudfactory) {

    var service = {
            login: login,
            loginfacebook: loginfacebook,
            checkAuth: checkAuth,
            checkSession:checkSession,
            getSynchronizedUsers:getSynchronizedUsers
        };
        return service;
        
        function login(username, password) {
            var auth = $firebaseAuth(ref);
            return auth.$authWithPassword({
            email: username+"@diplomado.com",
            password: password
        }).then(authComplete).catch(authFail);

            function authComplete(authData){
                return authData.uid;
            }

            function authFail(error){
                console.log("loaded error:", error);
                return error;
            }
        }

        function loginfacebook() {
            //var auth = $firebaseAuth(ref);
            return ref.authWithOAuthPopup("facebook").then(authComplete).catch(authFail);

            function authComplete(authData){
                return authData.uid;
            }

            function authFail(error){
                console.log("loaded error:", error);
                return error;
            }
        }

        function checkAuth() {
            return $firebaseAuth(ref);
        }

        function checkSession() {
            return ref.getAuth();
        }

         function getSynchronizedUsers() {
            return crudfactory.synchronizedModel("users");
        }
}