function Main(){
    let lVid = document.getElementById('localvideo');
    document.getElementById('access--btn').addEventListener('click', _ => {
        _.preventDefault();
        _.stopPropagation();
        let medConstraints = {
            video: true,
            audio: true
        };
        let ret = navigator.mediaDevices.getUserMedia(medConstraints);
        console.log();
        ret.then(stream => {
            console.log('Got Stream:', stream);
            lVid.srcObject = stream;
        }).catch(err => {
            console.log('Couldn\'t get access to the camera/mic:', err);
        }); 
    }, !1);   
    
}

document.addEventListener('readystatechange', _ => document.readyState === 'complete' && Main(), !1);