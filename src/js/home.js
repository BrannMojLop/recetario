import 'bootstrap';
import '../scss/home.scss';
import '../scss/menu.scss';
import '../scss/catalago.scss';
import '../scss/details.scss';
import './menu'
import './buscador'
import './receta_details'

// Query selector
const inputHome = document.querySelector("#input_home");
const recetaAleatoria = document.querySelector("#aleatoria");
const buscarHome = document.querySelector("#buscar_home");


inputHome.classList.toggle("input-negro"); //que sea blanco cuando escriba//



// Eventos
recetaAleatoria.addEventListener('click', () => {
    window.location.href = "./receta_details.html";
})

buscarHome.addEventListener('click', () => {
    if (inputHome.value.length > 0) {
        window.location.href = "./catalago.html?t=" + inputHome.value;
    } else {
        alert('El campo de texto no puede estar vacio');
    }

})

inputHome.addEventListener('keypress', e => {
    console.log(e);
    if (e.key === 'Enter') {
        if (inputHome.value.length > 0) {
            window.location.href = "./catalago.html?t=" + inputHome.value;
        } else {
            alert('El campo de texto no puede estar vacio');
        }
    }
})

