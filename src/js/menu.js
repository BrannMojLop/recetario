// Query selector
import closeMenuImg from '../assets/cerrar.png'
import menuIcon from '../assets/menu.png'
import logoIcon from '../assets/libro-de-recetas.png'

// Query Selector
const menu = document.querySelector('#menuHamburger');
const menuOculto = document.querySelector('#container-menuHamburger')
const logoHome = document.querySelector('#logoHome');
const logoMenu = document.querySelector('#logoMenu');
const menuClose = document.querySelector('#menuHamburgerClose');
const catalagoMain = document.querySelector('#main-catalago');
const detallesMain = document.querySelector('#details-mobile');
const inputMenu = document.querySelector('#input_menu');
const buscarMenu = document.querySelector('#buscar_menu');



menu.src = menuIcon;
logoHome.src = logoIcon;
logoMenu.src = logoIcon;
menuClose.src = closeMenuImg;



// Eventos
menu.addEventListener('click', () => {
    menuOculto.style.visibility = 'visible';

    if (window.location.pathname === "/receta_details.html") {
        detallesMain.style.visibility = 'hidden';
    } else {
        catalagoMain.style.visibility = 'hidden';
    }
})

menuClose.addEventListener('click', () => {
    menuOculto.style.visibility = 'hidden';

    if (window.location.pathname === "/receta_details.html") {
        detallesMain.style.visibility = 'visible';
    } else {
        catalagoMain.style.visibility = 'visible';
    }
})


inputMenu.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        if (inputMenu.value.length > 0) {
            window.location.href = "./catalago.html?t=" + inputMenu.value;
        } else {
            alert('El campo de texto no puede estar vacio');
        }
    }
})

buscarMenu.addEventListener('click', () => {
    if (inputMenu.value.length > 0) {
        window.location.href = "./catalago.html?t=" + inputMenu.value;
    } else {
        alert('El campo de texto no puede estar vacio');
    }

})