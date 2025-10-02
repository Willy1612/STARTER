function iniciarJuego (){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputXavi=document.getElementById("Xavi")
    let inputVinicius=document.getElementById("Vinicius")
    let inputPedri=document.getElementById("Pedri")

    
    let mascotaElegida = ""
        if(inputXavi.checked)
            {mascotaElegida="Xavi"
            alert("Has elegido: " + mascotaElegida)

            }
        else if(inputVinicius.checked) 
            {mascotaElegida="Vinicius"
            alert("Has elegido: " + mascotaElegida)

            }
        else if(inputPedri.checked)
            {mascotaElegida="Pedri"
            alert("Has elegido: " + mascotaElegida)

            }
        else{
            alert("Primero elige una mascota")
        }

    
}


window.addEventListener("load", iniciarJuego)
