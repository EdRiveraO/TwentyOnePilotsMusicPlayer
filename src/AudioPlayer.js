var isplaying=false;
class audio{
    constructor(song){
     this.song=song;
    }
    set song(song){
        console.log("Playing :"+song.src);
        this.playaudio(song);
    }
    get song(){
        return this.song;
    }
    playaudio(song){
        if(isplaying){
            song.pause();
            console.log("Stop");
            isplaying=false;
            shadowanimation(isplaying);
            let botones =document.querySelectorAll(".btn svg");
            for(var i=0; i<botones.length;i++){
                if(botones[i].id=="play"){
                   botones[i].style.display="flex";
                }
                if(botones[i].id=="pause"){
                    botones[i].style.display="none";
                 }
            }
        }else{
            console.log("Play");
            isplaying=true;
            shadowanimation(isplaying);
            song.play();
            let botones =document.querySelectorAll(".btn svg");
            for(var i=0; i<botones.length;i++){
                if(botones[i].id=="pause"){
                   botones[i].style.display="flex";
                }
                if(botones[i].id=="play"){
                    botones[i].style.display="none";
                 }
            }
        }
    }
}

