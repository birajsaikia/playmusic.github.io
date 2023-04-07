let B  = new Audio("./B.wav");
B.loop = false;
let E  = new Audio("./E.wav");
E.loop = false;
let F  = new Audio("./F.wav");
F.loop = false;
let G  = new Audio("./G.wav");
G.loop = false;
let H  = new Audio("./H.wav");
H.loop = false;
let I  = new Audio("./I.wav");
I.loop = false;
let J  = new Audio("./J.wav");
J.loop = false;
let K  = new Audio("./K.wav");
K.loop = false;
let R  = new Audio("./R.wav");
R.loop = false;
let V  = new Audio("./V.wav");
V.loop = false;

var button = document.getElementsByClassName('button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        console.log(value);
        if(value =="B"){
            B.loop = true;
            B.play()
            B.loop = false;
            
        }
        else if(value =="E"){
            E.loop = true;
            E.play()
            E.loop = false;
        }
        else if(value =="F"){
            F.loop = true;
            F.play()
            F.loop = false;
        }
        else if(value =="G"){
            G.loop = true;
            G.play()
            G.loop = false;
        }
        else if(value =="H"){
            H.loop = true;
            H.play()
            H.loop = false;
        }
        else if(value =="I"){
            I.loop = true;
            I.play()
            I.loop = false;
        }
        else if(value =="J"){
            J.loop = true;
            J.play()
            J.loop = false;
        }
        else if(value =="K"){
            K.loop = true;
            K.play()
            K.loop = false;
        }
        else if(value =="R"){
            R.loop = true;
            R.play()
            R.loop = false;
        }
        else if(value =="V"){
            V.loop = true;
            V.play()
            V.loop = false;
        }
});
}

document.addEventListener('keydown', function (event){
    var ans = event.keyCode;
    console.log(ans);
    var value = String.fromCharCode(ans);
    // console.log(value);
    
    if(ans == 98 || value =="B"){
        B.loop = true;
        B.play()
        B.loop = false;
        
    }
    else if(ans == 101|| value =="E"){
        E.loop = true;
        E.play()
        E.loop = false;
    }
    else if(ans == 102|| value =="F"){
        F.loop = true;
        F.play()
        F.loop = false;
    }
    else if(ans == 103|| value =="G"){
        G.loop = true;
        G.play()
        G.loop = false;
    }
    else if(ans == 104|| value =="H"){
        H.loop = true;
        H.play()
        H.loop = false;
    }
    else if(ans == 105|| value =="I"){
        I.loop = true;
        I.play()
        I.loop = false;
    }
    else if(ans == 106|| value =="J"){
        J.loop = true;
        J.play()
        J.loop = false;
    }
    else if(ans == 107|| value =="K"){
        K.loop = true;
        K.play()
        K.loop = false;
    }
    else if(ans == 114|| value =="R"){
        R.loop = true;
        R.play()
        R.loop = false;
    }
    else if(ans == 118|| value =="V"){
        V.loop = true;
        V.play()
        V.loop = false;
    }
}
);