(function() {
    //'use strict';//Por safari
    youRadioApp.factory('mySocket', mySocket);
    mySocket.$inject = ['socketFactory'];
    /* @ngInject */
    function mySocket(socketFactory) {
        var myIoSocket = io.connect('http://10.162.4.126:3000');

        mySocket = socketFactory({
          ioSocket: myIoSocket
        });
        /*return {
        on: function (eventName, callback) {
            socket.on(eventName, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            });
        }
    };*/

        return mySocket;
    }
})();