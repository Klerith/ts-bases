(() => {

    enum AudioLevel {
        min = 1,
        medium,
        max = 10,
    }

    let currentAudio:AudioLevel = AudioLevel.max;

    
    console.log( currentAudio );
    console.log( AudioLevel );


})()