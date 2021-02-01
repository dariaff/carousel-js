//variables
const objetoImg = document.querySelector("#imagen");
const botonAvanzar = document.querySelector("#avanzar");
const botonRetrodecer = document.querySelector("#retrodecer");
const imagenes =["img/jonathan-borba-dvN0SGmFM3Y-unsplash.jpg","img/liam-shaw-Zj-NP3Md4uU-unsplash.jpg", "img/mariola-grobelska-anLf6_6gSMk-unsplash.jpg"];
let pagina = 1;

//funcioines

function avanzarFoto(){
    pagina = pagina + 1;
    // verificamos que no hemos alcanzado el limitr, en caso contario lo aue restauramos a 1
    if(imagenes.length + 1 <= pagina) {
        pagina = 1;
    }

    render ();
}
function retrodecerFoto(){
    pagina = pagina - 1;
    // comprobamos que no ha alcanxado el limite de 0 , en caso contario lo restauramos a la ultima
    if (0===pagina){
        pagina = imagenes.lengthw
    }
    render();
}
function render (){
    objetoImg.setAttribute("src", imagenes[pagina - 1])
}
//eventos

botonAvanzar.addEventListener("click", avanzarFoto);
botonRetrodecer.addEventListener("click", retrodecerFoto);
//inicio
render();