//variables
const objetoImg = document.querySelector("#imagen");
const botonAvanzar = document.querySelector("#avanzar");
const botonRetrodecer = document.querySelector("#retrodecer");
const templateCirculo = document.querySelector("#template-circulo").content.firstElementChild;
const circulos  = document.querySelector("#circulos");
const imagenes =["img/jonathan-borba-dvN0SGmFM3Y-unsplash.jpg","img/liam-shaw-Zj-NP3Md4uU-unsplash.jpg", "img/mariola-grobelska-anLf6_6gSMk-unsplash.jpg"];
let pagina = 1;

//funcioines

function cambiarPagina(nuevaPagina){
    pagina = nuevaPagina;
    render();
}

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
        pagina = imagenes.length;
    }
    render();
}
function render (){
    //imagen
    objetoImg.setAttribute("src", imagenes[pagina - 1])
    //circulitos
    circulos.textContent = "";
    imagenes.forEach(function (imagen,indice){
        const nuevoCirculo = templateCirculo.cloneNode(true);
        nuevoCirculo.addEventListener("click",
            function () {
                cambiarPagina(indice + 1);
            });
        //marcamos el que coindice con la pagina
        if(pagina === indice + 1){
            nuevoCirculo.setAttribute("checked",true)
        }
        //mostramos
        circulos.appendChild(nuevoCirculo);
            });
    }


//eventos

botonAvanzar.addEventListener("click", avanzarFoto);
botonRetrodecer.addEventListener("click", retrodecerFoto);
//inicio
render();