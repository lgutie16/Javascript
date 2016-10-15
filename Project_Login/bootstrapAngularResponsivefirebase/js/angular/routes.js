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
    });
});