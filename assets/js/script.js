const modulo = (function(){
    function privadaCambiaURL(url, id){
        let iframe = document.getElementById(id);

        iframe.setAttribute("src", url);
    }

    return{
        setUrl: function(url, id){
            privadaCambiaURL(url, id)
        }
    }
})()

class Multimedia {
    constructor(url){
        this._url = url;
    }

    setInicio(){
        return "Este metodo es para realizar un cambio en el url del video"
    }
}

    



class Reproductor extends Multimedia {
    constructor(url, id){
        super(url);
        this._id = id;
    }

    playMultimedia() {
        modulo.setUrl(this._url, this._id);
    }
    
    
    setInicio(segundos) {

        this._url = `${this._url}&amp;start=${segundos}`

    }
}


let peliculas1 = new Reproductor("https://www.youtube.com/embed/Xbc5PSNetCY?si=s5WVtt8ok-RP9h_o" , "peliculas")
let serie1 = new Reproductor("https://www.youtube.com/embed/EMTCVcMAz2E?si=EffA7_p5AnzMkyZW", "series")
let musica = new Reproductor("https://www.youtube.com/embed/6Lk5FrtASVo?si=xdwzxO2Y83z4vbv3" , "musica")


peliculas1.playMultimedia();
serie1.setInicio(30);
serie1.playMultimedia();
musica.playMultimedia();    
