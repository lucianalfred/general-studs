const lampada = document.getElementById('lampada');
    let acendeu = false;
    function acenderLampada(){
        if(acendeu){
            lampada.src = "img/pic_bulboff.gif";
            acendeu = false;
        }
        else{
            lampada.src = "img/pic_bulbon.gif";
            acendeu = true;
        }
    }