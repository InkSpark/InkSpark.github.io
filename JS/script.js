var dis = document.getElementById('dis');
var display = 0;

var music = new Audio();
music.src = "audio/y2mate.com - Jingle Bells Instrumental Upbeat Version.mp3"

function hideShow(){
    if(display == 1){
        dis.style.display = 'block';
        display = 0;


    }
    else{
        dis.style.display = 'none';
        display = 1;

    }

}