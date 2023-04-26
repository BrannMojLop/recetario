// QuerySelectors
const pick = document.querySelector('#pick-receta img')
const category = document.querySelector('#breadcrumb-category a')
const name = document.querySelector('#nameReceta')
const listIngredientesM = document.querySelector('#listIngredientes')
const listIngredientesD = document.querySelector('#box-listIngredientes ul')
const boxInstruccionesM = document.querySelector('#box-instrucciones-mobile')
const boxInstruccionesD = document.querySelector('#box-instrucciones-desktop')

// Consultas API
const RecetaConsulta = async () => {
    let receta = window.location.search.slice(2, window.location.search.length);
    if (receta.length === 0) {
        receta = "https://www.themealdb.com/api/json/v1/1/random.php"
    } else {
        receta = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + receta;
    }
    const consulta = await fetch(receta);
    const data = await consulta.json();
    detailsReceta(data.meals[0])
}

const detailsReceta = receta => {
    const pickReceta = receta.strMealThumb;
    const categoria = receta.strCategory;
    const nameReceta = receta.strMeal;
    const instrucciones = receta.strInstructions

    category.textContent = categoria;
    category.setAttribute('class', 'category');
    name.textContent = nameReceta;
    const ingredientes = obtenerIngredientes(receta);
    listarIngredientes(ingredientes);
    getInstrucciones(instrucciones);
    pick.src = pickReceta;
}


const listarIngredientes = ingredientes => {
    ingredientes.forEach(ingrediente => {
        let liDesktop = document.createElement('li');
        let ingredienteTextDesktop = document.createTextNode(ingrediente)
        liDesktop.appendChild(ingredienteTextDesktop)
        let liMobile = document.createElement('li');
        let ingredienteTextMobile = document.createTextNode(ingrediente)
        liMobile.appendChild(ingredienteTextMobile)
        listIngredientesD.appendChild(liDesktop)
        listIngredientesM.appendChild(liMobile)
    });
}

const getInstrucciones = intrucciones => {
    let pDesktop = document.createElement('p');
    let instruccionesTextDesktop = document.createTextNode(intrucciones);
    pDesktop.appendChild(instruccionesTextDesktop);
    let pMobile = document.createElement('p');
    let instruccionesTextMobile = document.createTextNode(intrucciones);
    pMobile.appendChild(instruccionesTextMobile);
    boxInstruccionesD.appendChild(pDesktop);
    boxInstruccionesM.appendChild(pMobile);

}

const obtenerIngredientes = receta => {
    let arrayIngredientes = [];
    let arrayMedidas = [];
    let countI = 1;
    let countM = 1;

    for (const key in receta) {
        if (key === 'strIngredient' + countI) {
            arrayIngredientes.push(key);
            countI++;
        }
        if (key === 'strMeasure' + countM) {
            arrayMedidas.push(key);
            countM++;
        }
    }

    const ingredientes = [];

    for (let i = 0; i < arrayIngredientes.length; i++) {
        if (receta[arrayIngredientes[i]] != "" && receta[arrayIngredientes[i]] != null) {
            ingredientes.push(`${receta[arrayIngredientes[i]]} ${receta[arrayMedidas[i]]}`);
        }
    }

    return ingredientes;

}

// Exportacin de Modulos
RecetaConsulta();

// Eventos
document.addEventListener("click", e => {
    if (e.target.className == "category") {
        window.location.href = "./catalago.html?c=" + e.target.textContent;
    }
})