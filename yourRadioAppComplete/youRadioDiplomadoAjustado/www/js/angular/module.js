var youRadioApp = angular.module('youRadio', ['ionic', 'firebase', 'btford.socket-io']);
youRadioApp.constant("CONFIG", {
          "FIREBASE_URL": "https://diplomadomovil2016.firebaseio.com/",
          "SECRET":"qBBllYqQqnaFJa93Jc8vtbYldzGuBN7CFNQ8qXM2"
        });

youRadioApp.config(function($ionicConfigProvider){
  
});

youRadioApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});