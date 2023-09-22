//Esta función nos permitirá cambiar entre estos cinco colores
function cambiarColor() {
    let colores = [
        "rgb(255, 255, 255)",
        "rgb(0, 128, 0)",
        "rgb(39, 121, 214)",
        "rgb(255, 255, 0)",
        "rgb(255, 192, 203)"
    ];

    let indiceAleatorio = Math.floor(Math.random() * colores.length);
    let color_seleccionado = colores[indiceAleatorio];
    
    return color_seleccionado;
}

const boton = document.querySelector("button");
const colorTexto = document.getElementById("color");
const equipo = document.getElementById("equipo");

function seleccionar(color_elegido) {
    let color_final = color_elegido;
    if (color_final == "rgb(255, 255, 255)"){
        color_final = "Blanco";
    } else if (color_final == "rgb(39, 121, 214)") {
        color_final = "Azul";
    } else if (color_final == "rgb(255, 255, 0)") {
        color_final = "Amarillo";
    } else if (color_final == "rgb(0, 128, 0)") {
        color_final = "Verde";
    } else if (color_final == "rgb(255, 192, 203)") {
        color_final = "Rosa";
    }

    return color_final;
}

//Defino la función en el parámetro, re loco jajajs
boton.addEventListener("click", function() {
    let color_elegido = cambiarColor();
    // cambiar color
    equipo.style.backgroundColor = color_elegido;
    // cambiar texto
    let color = seleccionar(color_elegido);
    colorTexto.textContent = "Equipo: " + color;

})

// const white = rgb(255, 255, 255)
//     const green = rgb(0, 128, 0)
//     const blue = rgb(0, 0, 255)
//     const yellow = rgb(255, 255, 0)
//     const pink = rgb(255, 192, 203)