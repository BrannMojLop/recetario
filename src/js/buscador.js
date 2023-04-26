// Query selector
const catalagoBox = document.querySelector('.catalago')
const busqueda = document.querySelector('#text-search')
const busquedaFaild = document.querySelector('#search-faild')

// Consulta API
const RecetasBusqueda = async () => {

    try {
        const search = window.location.search.slice(3, window.location.search.length)

        if (window.location.search.slice(1, 2) == 't') {
            busqueda.textContent = `Busqueda: ${search}`;
            const consulta = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search);
            const data = await consulta.json();
            if (data.meals == null) {
                alert(`No se encontraron resultados, porfavor intenta una nueva busqueda`, window.location.href = "./index.html")
            } else {
                ListarRecetasBuscadas(data.meals);
            }
        } else {
            busqueda.textContent = search;
            const consulta = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + search);
            const data = await consulta.json();
            if (data.meals == null) {
                alert('No se encontraron resultados', window.location.href = "./index.html")
            } else {
                ListarRecetasBuscadas(data.meals);
            }
        }
    } catch (e) {
        console.log(e);
    }


}

const ListarRecetasBuscadas = listaRecetas => {

    listaRecetas.forEach(receta => {
        let receta_box = document.createElement('div');
        let receta_h3 = document.createElement('h3');
        let botonDetalles = document.createElement('button');
        let recetaName = document.createTextNode(receta.strMeal);
        let buttonName = document.createTextNode("!PREPARALO!");
        botonDetalles.setAttribute('id', receta.idMeal);
        botonDetalles.setAttribute('class', 'select_receta');
        receta_box.setAttribute("class", "card");
        receta_box.appendChild(receta_h3);
        receta_box.appendChild(botonDetalles);
        botonDetalles.appendChild(buttonName);
        receta_h3.appendChild(recetaName);
        receta_box.style.backgroundImage = `url(${receta.strMealThumb})`
        catalagoBox.appendChild(receta_box)
    });
}


// Exportacin de Modulos
RecetasBusqueda()


// Eventos
document.addEventListener("click", e => {
    if (e.target.className == "select_receta") {
        window.location.href = "./receta_details.html?=" + e.target.id;
    }
})