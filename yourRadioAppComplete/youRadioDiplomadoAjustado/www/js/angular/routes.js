youRadioApp.config(function($stateProvider, $urlRouterProvider) {
  
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
        controller: 'ChannelsCtrl'
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
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'LoginCtrl'
  })

  .state('tabsController.programsRadioUno', {
    url: '/programs/:channelId',
    views: {
      'tab1': {
        templateUrl: 'templates/programsRadioUno.html',
        controller: 'ProgramCtrl'
      }
    }
  })

  .state('tabsController.programNosFuimos', {
    url: '/program/:programId',
    views: {
      'tab1': {
        templateUrl: 'templates/programNosFuimos.html',
        controller: 'ProgramDetailCtrl'
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
  });

$urlRouterProvider.otherwise('/page1/channels');

  /*$urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/initial.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "templates/register.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html"
    })
    .state('list', {
      url: "/list",
      templateUrl: "templates/list.html"
    })
    .state('channels', {
      url: "/channels",
      templateUrl: "templates/channels.html"
    })
    .state('programs', {
      url: "/programs/:channelId",
      templateUrl: "templates/programs.html"
    })
    .state('program', {
      url: "/program/:programId",
      templateUrl: "templates/program.html",
      controller:"ProgramDetailCtrl"
    });*/
});