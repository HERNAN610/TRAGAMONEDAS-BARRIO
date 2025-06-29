//VARIABLES---------------------------------------------------------
//APUESTA POR FRUTA
let creditos = 0;
//GANANCIA O DOBLAR
let totalGanancia = 0
let sumaGanancia = 0
let ultimaGanancia = 0
let elemento = ""
let puntos = 0
let casillaAleatoria = 0;
let apuestas = 0;
let ganancia = 0;

let ladoSeleccionado = "";
let gananciaDoblada = 0
let estado_doblar = ""
//ANIMACION RULETA
let casillaAnterior = 0;
let vueltas = 0;
let delayTotal = 0;
let delayPorCasilla = 100; // milisegundos
//COBRAR
let salida = 0;
//COIN MONE
let ultimo_click_coin = 0;
let ultimo_click_none = 0;
let tiempo_doble_click = 165; // milisegundos


//let elementoSeleccionado = "";
//let idElementoSeleccionado = "";
let puntosElemento = 0;
let puntosActuales = 0;
/*
//PUNTOS
let apuestaManzana = 0;
let apuestaSandia = 0;
let apuestaEstrella = 0;
let apuesta777 = 0;
let apuestaBar = 0;
let apuestaCampana = 0;
let apuestaMelon = 0;
let apuestaNaranja = 0;
let apuestaCereza = 0;
*/
//LISTA RULETA
listaElementos = ["ESTRELLA", "CEREZA", "ONE_MORE", "MANZANA", "CAMPANA", "NARANJA", "CAMPANA", "BAR", "BAR", "MANZANA", "CEREZA", "MELON", "SANDIA", "CEREZA", "ONE_MORE", "MANZANA", "CEREZA", "NARANJA", "CAMPANA", "CEREZA", "777", "MANZANA", "CEREZA", "MELON"]
listaPuntos = [30, 2, 1, 5, 20, 10, 20, 250, 500, 5, 2, 15, 20, 2, 1, 5, 2, 10, 20, 2, 40, 5, 2, 15];


//CONTADOR DE APUESTA-----------------------------------------------------------------------------------------------------------
function botonPuntos(elemento) {
    let elementoSeleccionado = elemento.id;
    let idElementoSeleccionado = "puntos" + elementoSeleccionado;

    puntosElemento = document.getElementById(idElementoSeleccionado);
    puntosActuales = parseInt(puntosElemento.innerHTML)

    // Verificar que el botón actual no ha llegado a 9 y que hay créditos suficientes
    if (puntosActuales < 9 && creditos >= 5) {
        creditos -= 5;
        credito.innerHTML = creditos;

        puntosElemento.innerHTML = puntosActuales + 1;
    }
    actualizarEstadoBotonJugar();//VERIFICAR SE PUEDE JUGAR
}

//APOSTAR------------------------------------------------------------------------------------------------------------------------------------------------------------

function apostar() {
    valorApostar = document.getElementById("entrada_apuesta").value;

    creditos += valorApostar * 10
    credito.innerHTML = creditos
    document.getElementById("entrada_apuesta").value = "";

    actualizarEstadoBotonJugar();//verificar si se puede jugar
}

//JUGAR-----------------------------------------------------------------------------------------------------------------------------------------------
function jugar() {
    //desactivar jugar
    boton_jugar.disabled = true

    //variables
    let nID = 0
    const Vueltas = 24
    let listID = []
    let desenso = 0
    let x = 0
    let comiensoDesenso = 0
    let totalCasillas = 0

    //RULETA ALEATORIA
    casillaAleatoria = Math.floor(Math.random() * 24);
    console.log("Número de ruleta: " + casillaAleatoria);
    //ANIMACION DE RULETA
    totalCasillas = casillaAleatoria + Vueltas * 1 //cantidad de vueltas
    comiensoDesenso = totalCasillas - 7//comienso del desenso de velocidad

    //generar ID para cada (casillaAleatoria + cantidad de vueltas)
    for (nLista = 0; nLista <= totalCasillas; nLista++) {
        listID.push(nID)
        nID = nID + 1
        if (nID > 23) {
            nID = 0
        }
    }
    //generar animacion
    for (let casillas = 0; casillas <= totalCasillas; casillas++) {

        if (casillas >= comiensoDesenso) {
            x += 1
            desenso = x * x
        }
        //desenso
        //console.log("desenso: " + desenso)
        let delayTotal = casillas * (delayPorCasilla + desenso);

        // Guardar el último delayTotal para usarlo luego
        if (casillas === totalCasillas) {
            delayFinal = delayTotal;
        }
        //pintar despintar
        setTimeout(() => {
            sonidoRuleta()//sonido de tik
            let idCasilla = "casilla-" + listID[casillas];
            //delay por casillas
            //console.log("casilla: " + casillas + " delay: " + delayTotal)

            // Restaurar color anterior si existe
            if (casillaAnterior !== null) {
                let casillaAnt = document.getElementById(casillaAnterior);
                if (casillaAnt) casillaAnt.style.backgroundColor = "";
            }
            // Pintar nueva casilla
            let nuevaCasilla = document.getElementById(idCasilla);
            if (nuevaCasilla) {
                nuevaCasilla.style.backgroundColor = "orange";
                casillaAnterior = idCasilla;
            } else {
                console.warn("No se encontró el elemento con id: " + idCasilla);
            }
        }, delayTotal);
    }

    //SISTEMA DE PUNTOS
    elemento = listaElementos[casillaAleatoria]
    puntos = listaPuntos[casillaAleatoria]

    buscarIdApuesta = "puntos" + elemento
    apuestaEncontrada = document.getElementById(buscarIdApuesta).innerHTML






    setTimeout(() => {
        // conteo de puntos
        if (puntos == 1) {
            console.log("---VUELVE A JUGAR---")
            ganancia = apuestaEncontrada * 0;
            sumaGanancia += ganancia;

            sonidobuelveAjugar()//sonido de bolver a jugar 
        } else {
            ganancia = apuestaEncontrada * puntos;

            ultimaGanancia = ganancia
            sumaGanancia += ganancia



            //PUNTOS
            let apuestaManzana = 0;
            let apuestaSandia = 0;
            let apuestaEstrella = 0;
            let apuesta777 = 0;
            let apuestaBar = 0;
            let apuestaCampana = 0;
            let apuestaMelon = 0;
            let apuestaNaranja = 0;
            let apuestaCereza = 0;

            puntosMANZANA.innerHTML = 0;
            puntosSANDIA.innerHTML = 0;
            puntosESTRELLA.innerHTML = 0;
            puntos777.innerHTML = 0;
            puntosBAR.innerHTML = 0;
            puntosCAMPANA.innerHTML = 0;
            puntosMELON.innerHTML = 0;
            puntosNARANJA.innerHTML = 0;
            puntosCEREZA.innerHTML = 0;
        }
        //sonido de victoria o perdida o buelve a jugar
        if (ganancia > 1) {
            sonidoVictoria()

        } else {
            sonidoPerdiste()
        }
        //MANDAR RESULTADO----------------------------------------
        apuesta.innerHTML = sumaGanancia;

        console.log("salio: " + elemento + " puntaje: " + puntos + "// apostaste " + apuestaEncontrada + " ganaste: " + ganancia);
        console.log("ganancia acumulada: " + apuesta.innerHTML);
        console.log("-------------------------------------------");

        actualizarEstadoBotonJugar();
    }, delayFinal + 50);
    //ANIMACION DE DOBLAR
    setTimeout(() => {
        let casillasDoblar = 0;
        let i = 0;
        const casilla_derecha = document.getElementById("derecha");
        const casilla_izquierda = document.getElementById("izquierda");
        // inicia animacion
        const intervalo = setInterval(() => {
            if (casillasDoblar === 0) {
                casilla_derecha.style.backgroundColor = "#ff4d4d";
                casilla_izquierda.style.backgroundColor = "#ff4d4d";
                casillasDoblar = 1;
            } else {
                casilla_derecha.style.backgroundColor = "";
                casilla_izquierda.style.backgroundColor = "";
                casillasDoblar = 0;
            }
            i++;
            if (i >= 10) {
                clearInterval(intervalo);
            }
        }, 100);

        actualizarEstadoBotonCobrar();//verificar si se puede cobrar
        actualizarEstadoBotonJugar();//verificar si se puede jugar
        actualizarEstadoBotonesDoblar();//verificar si se puede doblar apuesta
    }, delayFinal + 100)

}
//APUESTA R o L ------------------------------------------------------------------------------------------------------------------------------
function apostarLado(lado) {
    boton_L.disabled = true
    boton_R.disabled = true

    let casillasDoblar = 0;
    let i = 0;
    const casilla_derecha = document.getElementById("derecha");
    const casilla_izquierda = document.getElementById("izquierda");

    const ladoAleatorio = Math.random() < 0.5 ? 1 : 0;
    console.log("lado aleatorio: ", ladoAleatorio)
    console.log("izquierda=0, derecha=1{", lado, "}");

    // RULETA DE DOBLAR APUESTA (parpadea)
    const intervalo = setInterval(() => {
        if (casillasDoblar === 0) {
            casilla_izquierda.style.backgroundColor = "#ff4d4d";
            casilla_derecha.style.backgroundColor = "";

            casillasDoblar = 1;
        } else {
            casilla_izquierda.style.backgroundColor = "";
            casilla_derecha.style.backgroundColor = "#ff4d4d";

            casillasDoblar = 0;
        }
        i++;
        if (i >= 20) {
            clearInterval(intervalo);
            // MOSTRAR RESULTADO FINAL
            setTimeout(() => {
                //IZQUIERDA
                if (ladoAleatorio == lado) {
                    estado_doblar = "ganaste"

                    gananciaDoblada = ultimaGanancia * 2
                    sumaGanancia -= ultimaGanancia
                    sumaGanancia += gananciaDoblada

                    ultimaGanancia = gananciaDoblada
                } else {

                    sumaGanancia -= ultimaGanancia
                    ultimaGanancia = 0
                }

                console.log(estado_doblar)
                console.log("Ganaste: " + ganancia + " | Ganancia doblada: " + gananciaDoblada + " | Ganancia total: " + sumaGanancia)
                apuesta.innerHTML = sumaGanancia

                actualizarEstadoBotonesDoblar(); // verifica si se puede volver a doblar

            }, 300);
        }
    }, 150);

}
//COBRAR------------------------------------------------------------------------------------------------------------------------------
function cobrar() {
    let salida_apuesta = document.getElementById("salida_apuesta");

    // Convertir el contenido actual de apuesta en número
    let valorApuesta = +apuesta.innerHTML;

    // Sumar al saldo de salida
    salida += valorApuesta / 10;
    salida_apuesta.innerHTML = salida.toFixed(2);

    // Reiniciar apuestas y ganancia globales
    apuestas = 0;
    ganancia = 0;

    // Reflejar los cambios visualmente
    apuesta.innerHTML = 0;

    // Desactivar botones que dependan de la ganancia
    actualizarEstadoBotonCobrar();
    actualizarEstadoBotonesDoblar();

    console.log("salida de apuesta: " + salida + " ganancia: " + ganancia);
}
//COIN/ NOME-------------------------------------------------------------------------------------------------------------
function COIN() {
    let ahora = Date.now();
    apuestas = +apuesta.innerHTML;
    creditos = +credito.innerHTML;

    if (ahora - ultimo_click_coin < tiempo_doble_click) {
        // Doble clic rápido → pasar todo
        creditos = creditos + apuestas;

        apuestas = 0
    } else {
        // Clic normal → pasar uno
        if (apuestas > 0) {
            apuestas = apuestas - 1;
            creditos = creditos + 1;


        }
    }

    apuesta.innerHTML = apuestas;
    credito.innerHTML = creditos;

    console.log("apuesta: " + apuestas + " credito: " + creditos);
    ultimo_click_coin = ahora;
    actualizarEstadoBotonesDoblar();//VERIFICAR SE PUEDE DOBLAR
    actualizarEstadoBotonJugar();//VERIFICAR SE PUEDE JUGAR
    actualizarEstadoBotonCobrar()//VERIFICAR SI SE PUEDE COBRAR
}
function NONE() {
    let ahora = Date.now();
    apuestas = +apuesta.innerHTML;
    creditos = +credito.innerHTML;

    if (ahora - ultimo_click_none < tiempo_doble_click) {
        // Doble clic rápido → pasar todo
        apuestas = apuestas + creditos;

        creditos = 0
    } else {
        // Clic normal → pasar uno
        if (creditos > 0) {
            apuestas = apuestas + 1;
            creditos = creditos - 1;
        }
    }

    apuesta.innerHTML = apuestas;
    credito.innerHTML = creditos;

    console.log("apuesta: " + apuestas + " credito: " + creditos);
    ultimo_click_none = ahora;
    actualizarEstadoBotonesDoblar();//VERIFICAR SE PUEDE DOBLAR
    actualizarEstadoBotonJugar();//VERIFICAR SE PUEDE JUGAR
    actualizarEstadoBotonCobrar()//VERIFICAR SI SE PUEDE COBRAR
}
//VERIFICACIONES--------------------------------------------------------------------------------------------------------------
//verificar si se puede jugar
function actualizarEstadoBotonJugar() {
    const botonJugar = document.getElementById("boton_jugar");
    if ((puntosElemento.innerHTML > 0 || elemento == "ONE_MORE") && (creditos >= 0)) {
        botonJugar.disabled = false;
    } else {
        botonJugar.disabled = true;
    }

}
//verificar si se puede doblar apuesta
const boton_L = document.getElementById("L")
const boton_R = document.getElementById("R")

function actualizarEstadoBotonesDoblar() {
    if (ultimaGanancia != 0) {
        boton_L.disabled = false
        boton_R.disabled = false
    } else {
        boton_L.disabled = true
        boton_R.disabled = true
    }
}

//verificar si se puede cobrar 
function actualizarEstadoBotonCobrar() {
    const boton_cobrar = document.getElementById("cobrar");
    if (+apuesta.innerHTML <= 0) {
        boton_cobrar.disabled = true
    } else {
        boton_cobrar.disabled = false
    }
}
//SONIDOS-----------------------------------------------------------------------------------------------------------------------------------------
function sonidoRuleta() {
    let sonido = new Audio("sonidos/sonidoRuleta.mp3");
    sonido.play();
}
function sonidoVictoria() {
    let sonido = new Audio("sonidos/ganaste.mp3");
    sonido.play();
}
function sonidoPerdiste() {
    let sonido = new Audio("sonidos/perdiste1.mp3");
    sonido.play();
}
function sonidobuelveAjugar() {
    let sonido = new Audio("sonidos/empate.mp3");
    sonido.play();
}
