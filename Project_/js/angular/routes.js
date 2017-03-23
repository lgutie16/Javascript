youRadioApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
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
     .state('contact', {
      url: "/contact",
      templateUrl: "templates/contacts.html"
    })
    .state('radios', {
      url: "/radios",
      templateUrl: "templates/radios.html"
    })
    .state('programs', {
      url: "/programs:programId",
      templateUrl: "templates/programs.html"
    });
    ;
});