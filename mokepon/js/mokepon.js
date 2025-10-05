let ataqueJugador
let ataqueEnemigo
let resultado

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
    ataqueAleatorioEnemigo()
}   
function ataqueAgua(){
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}   

function ataqueTierra(){
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    }

    else if(ataqueAleatorio == 2) {    
        ataqueEnemigo = "AGUA"
    }
    else {
        ataqueEnemigo = "TIERRA"
    }
    combate()
   

}

function combate () {

      if (ataqueEnemigo == ataqueJugador) { 
        alert("EMPATE") }
        else if ( ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") { 
                alert("GANASTE") 
        } 
        else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") { 
                alert("GANASTE") 
        }
        else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") { 
                alert("GANASTE") 
        }
        else { alert("PERDISTE") 
        }


}

    
//FUEGO GANA A TIERRA
//AGUA GANA A FUEGO
//TIERRA GANA A AGUA

function crearMensaje() {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + resultado

    sectionMensajes.appendChild(parrafo)

}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego)