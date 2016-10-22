angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.canales', {
    url: '/channels',
    views: {
      'tab1': {
        templateUrl: 'templates/canales.html',
        controller: 'canalesCtrl'
      }
    }
  })

  .state('tabsController.favoritos', {
    url: '/favorites',
    views: {
      'tab2': {
        templateUrl: 'templates/favoritos.html',
        controller: 'favoritosCtrl'
      }
    }
  })

  .state('tabsController.contactos', {
    url: '/contacts',
    views: {
      'tab3': {
        templateUrl: 'templates/contactos.html',
        controller: 'contactosCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.programsRadioUno', {
    url: '/programs',
    views: {
      'tab1': {
        templateUrl: 'templates/programsRadioUno.html',
        controller: 'programsRadioUnoCtrl'
      }
    }
  })

  .state('tabsController.programNosFuimos', {
    url: '/program',
    views: {
      'tab1': {
        templateUrl: 'templates/programNosFuimos.html',
        controller: 'programNosFuimosCtrl'
      }
    }
  })

  .state('tabsController.contacto', {
    url: '/contact',
    views: {
      'tab1': {
        templateUrl: 'templates/contacto.html',
        controller: 'contactoCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/channels')

  

});