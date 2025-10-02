let ataqueJugador

function iniciarJuego (){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click" , ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click" , ataqueAgua) 
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click" , ataqueTierra) 

}


function seleccionarMascotaJugador() {
    let inputXavi=document.getElementById("Xavi")
    let inputVinicius=document.getElementById("Vinicius")
    let inputPedri=document.getElementById("Pedri")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

        if(inputXavi.checked)
            {spanMascotaJugador.innerHTML = "Xavi"

            }
        else if(inputVinicius.checked) 
            {spanMascotaJugador.innerHTML = "Vinicius"

            }
        else if(inputPedri.checked)
             {spanMascotaJugador.innerHTML = "Pedri"

            }
        else{
            alert("Primero elige una mascota")
        }
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    
    let numeroAleatorioMascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemiga = document.getElementById("mascota-enemigo")

    if(numeroAleatorioMascotaEnemigo == 1) {
        spanMascotaEnemiga.innerHTML = "Xavi"
    }
    
    if(numeroAleatorioMascotaEnemigo == 2) {
        spanMascotaEnemiga.innerHTML = "Vinicius"
    }

    if(numeroAleatorioMascotaEnemigo == 3) {
        spanMascotaEnemiga.innerHTML = "Pedri"
    }

}
         
function ataqueFuego(){
    ataqueJugador = "FUEGO"
    alert("Has elegido " + ataqueJugador)
}

function ataqueAgua(){
    ataqueJugador = "AGUA"
    alert("Has elegido " + ataqueJugador)
}

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    alert("Has elegido " + ataqueJugador)
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



    



window.addEventListener("load", iniciarJuego)
