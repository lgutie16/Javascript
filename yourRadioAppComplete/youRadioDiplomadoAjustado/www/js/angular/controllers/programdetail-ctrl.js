youRadioApp.controller('ProgramDetailCtrl', ProgramDetailCtrl);

ProgramDetailCtrl.$inject = ['$scope','$stateParams', 'programService', 'mySocket'];

function ProgramDetailCtrl($scope, $stateParams, programService, mySocket) {

  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioCtx = new AudioContext();
  
  loadMessages();

  function loadMessages(){
   programService.getMessagesByProgram($stateParams.programId).then(function(data){
	   $scope.messages=data;
   }).catch(function(error){
   	console.log(error);
   });
  }

  $scope.addMessage=function(text){
    var message={};
    message.message=text;
    message.username="jgamezma";
    $scope.messages.$add(message);

  }

  mySocket.on('broadcast', function (data) {

    var source = audioCtx.createBufferSource();

    audioCtx.decodeAudioData(data.audio, function(decodedData) {
        source.buffer = decodedData;
        source.connect(audioCtx.destination);
        source.start(0);
    }, function(err) {
        console.log(err)
    })
  });

  $scope.talk=function(){

    function onAudioInput( evt ) {
    // 'evt.data' is an integer array containing raw audio data
    //   
      //console.log( "Audio data received: " + evt.data.length + " samples" );
      var encoder = new WavAudioEncoder(audioinput.SAMPLERATE.CD_AUDIO_44100Hz, audioinput.CHANNELS.MONO);
      encoder.encode([evt.data]);

      //console.log("Encoding WAV finished");

      var blob = encoder.finish("audio/wav");
      mySocket.emit('audio:input', {"audio":blob});
      //audioinput.stop();

      //console.log("BLOB created");
    }

    // Listen to audioinput events
    window.addEventListener( "audioinput", onAudioInput, false );

    audioinput.start({
      //streamToWebAudio: true,
      bufferSize: 8192 
    });

    // Connect the audioinput to the device speakers in order to hear the captured sound.
    //audioinput.connect(audioinput.getAudioContext().destination);
    // Stop capturing audio input
    //audioinput.stop()

  }
  
}