(function() {
    'use strict';
    youRadioApp.factory('ref', ref);
    ref.$inject = ['CONFIG'];
    /* @ngInject */
    function ref(CONFIG) {
      return new Firebase(CONFIG.FIREBASE_URL);
    }
})();