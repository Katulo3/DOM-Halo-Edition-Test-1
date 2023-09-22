// Ver parentElement, podría hacer el menú y foto en una sola url. Jijijija

const juegos = document.getElementsByClassName('juegos');

for (let juego of juegos) { 
    juego.addEventListener("click", (e) => {
        console.log(e.target.innerText); 
    });
}

let citas = [
    {
    "autor": "Sgt. Avery Jhonson",
    "texto": "Para ser un ladrillo, vuela bastante bien."
},
{
    "autor": "Master Chief",
    "texto": "Necesito un arma."
},
{
    "autor": "Elite",
    "texto": "Pozole"
},
{
    "autor": "Master Chief",
    "texto": "Ustedes empezaron la guerra, nosotros la terminaremos."
},
{
    "autor": "Comandante Carter",
    "texto": "Los Spartan nunca mueren, solo desaparecen en acción."
},
{
    "autor": "Sgt. Avery Jhonson",
    "texto": "¡Escuchen señores! ¡En mis tiempos no teníamos tanques bonitos! Teníamos palos. Dos palos y una piedra para todo el pelotón! Y la piedra era para compartirla! Deberían considerarse unos marines afortunados por ello!"
},
{
    "autor": "Cortana",
    "texto": "Oh, gracias por el tanque, él nunca me regala nada."
},
{
    "autor": "Gravemind",
    "texto": "El destino hizo enemigos de nosotros, pero este anillo nos hará hermanos."
},
{
    "autor": "Cortana",
    "texto": "Cuando se acaba el juego, el rey y el peón han de entrar en la misma caja."
},
{
    "autor": "Master Chief",
    "texto": "Todos fallamos. Todos cometemos errores. Es lo que nos hace humanos."
},
{
    "autor": "Random Elite",
    "texto": "Tanta camadería, alegra el corazón."
},

]

let citaElem = document.getElementById('citas');
let autorElem = document.getElementById('autor');

function generarNumAleatorio(min, max){
    //No incluye máximo
    return Math.floor(Math.random() * (max- min) + min)
}

function cambiarCita(){
    let indiceAleatorio = generarNumAleatorio(0, citas.length)
    
    citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
    autorElem.innerText = citas[indiceAleatorio].autor;

}

cambiarCita();

//Cambiar fotos

const bodyFoto = document.querySelector('body');
//esto podría hacerlo con for pero es práctica de otra cosa, so :P

const haloreach = document.getElementById('haloreach')
const halo1 = document.getElementById('halo1')
const halo2 = document.getElementById('halo2')
const hal3 = document.getElementById('halo3')
const halo3O = document.getElementById('halo3O')
const halo4 = document.getElementById('halo4')


for (let halo of juegos) { 
    halo.addEventListener("click", (e) => {
        const clickedElement = e.target;

        if (clickedElement.id === 'halo2') {
            bodyFoto.style.background = 'url(img/halo2.jpg) no-repeat center center/cover';

        } else if (clickedElement.id === 'halo1') {
            bodyFoto.style.background = 'url(img/haloCE.jpg) no-repeat center center/cover';

        } else if (clickedElement.id === 'haloreach') {
            bodyFoto.style.background = 'url(img/reach.jpg) no-repeat center center/cover';

        } else if (clickedElement.id === 'halo3') {
            bodyFoto.style.background = 'url(img/halo3.jpg) no-repeat center center/cover';

        } else if (clickedElement.id === 'halo3O') {
            bodyFoto.style.background = 'url(img/halo3ODST.jpg) no-repeat center center/cover';

        } else if (clickedElement.id === 'halo4') {
            bodyFoto.style.background = 'url(img/halo4.jpg) no-repeat center center/cover';

        }else {
            bodyFoto.style.background = 'url(img/fondo.jpg) no-repeat center center/cover';
        }
    });
}

