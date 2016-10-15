(function() {
    'use strict';
    youRadioApp.factory('crudfactory', crudfactory);
    crudfactory.$inject = ['ref', '$firebaseArray'];
    /* @ngInject */
    function crudfactory(ref, $firebaseArray) {
        var service = {
            synchronizedModel: synchronizedModel
        };
        return service;
        function synchronizedModel() {
            // first param should be key and the others childs
            var refFirebase;
            for (var i = 0; i < arguments.length; i++) {
              if(!refFirebase){
                refFirebase=ref.child(arguments[i]);  
              }else{
                refFirebase=refFirebase.child(arguments[i]);  
              }
            }
            var list = [];
            syncChanges(list, refFirebase);
            wrapLocalCrudOps(list, refFirebase);
            return list;
        }

        function syncChanges(list, ref) {
            ref.on('child_added', function _add(snap, prevChild) {
                var data = snap.val();
                data.$id = snap.key(); // assumes data is always an object
                var pos = positionAfter(list, prevChild);
                list.splice(pos, 0, data);
              });
             ref.on('child_removed', function _remove(snap) {
                var i = positionFor(list, snap.key());
                if( i > -1 ) {
                  list.splice(i, 1);
                }
              });
              ref.on('child_changed', function _change(snap) {
                var i = positionFor(list, snap.key());
                if( i > -1 ) {
                  list[i] = snap.val();
                  list[i].$id = snap.key(); // assumes data is always an object
                }
              });
              ref.on('child_moved', function _move(snap, prevChild) {
                var curPos = positionFor(list, snap.key());
                if( curPos > -1 ) {
                  var data = list.splice(curPos, 1)[0];
                  var newPos = positionAfter(list, prevChild);
                  list.splice(newPos, 0, data);
                }
              });
        }

        function wrapLocalCrudOps(list, firebaseRef) {
           // we can hack directly on the array to provide some convenience methods
           list.$add = function(data) {
              return firebaseRef.push(data);
           };
           list.$remove = function(key) {
             firebaseRef.child(key).remove();
           };

           list.$filterEqual = function(key, value) {
            var list = [];
            var refFirebase=firebaseRef.orderByChild(key).equalTo(value);
            syncChanges(list, refFirebase);
            wrapLocalCrudOps(list, refFirebase);
            return list;
           };
           
           list.$set = function(key, newData) {
             // make sure we don't accidentally push our $id prop
             if( newData.hasOwnProperty('$id') ) { delete newData.$id; }
             firebaseRef.child(key).set(newData);
           };
           list.$update = function(key, newData) {
             firebaseRef.child(key).update(newData);
           };
           list.$indexOf = function(key) {
             return positionFor(list, key); // positionFor in examples above
           }
           list.$load = function() {
             var syncArray = $firebaseArray(firebaseRef);
             return syncArray.$loaded().then(loadComplete).catch(loadFail);

             function loadComplete(items){
                wrapLocalCrudOps(items, firebaseRef);
                return items;
            }

            function loadFail(error){
                console.log("loaded error:", error);
                return error;
            }
           };
        }

        // similar to indexOf, but uses id to find element
        function positionFor(list, key) {
          for(var i = 0, len = list.length; i < len; i++) {
            if( list[i].$id === key ) {
              return i;
            }
          }
          return -1;
        }
        // using the Firebase API's prevChild behavior, we
        // place each element in the list after it's prev
        // sibling or, if prevChild is null, at the beginning
        function positionAfter(list, prevChild) {
          if( prevChild === null ) {
            return 0;
          }
          else {
            var i = positionFor(list, prevChild);
            if( i === -1 ) {
              return list.length;
            }
            else {
              return i+1;
            }
          }
        }
    }
})();