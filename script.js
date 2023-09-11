// QUERY SELECTORS
const container=document.querySelector("#container");
const colorBtn=document.querySelector(".color-mode");
const eraserBtn=document.querySelector(".eraser-mode");
const clearBtn=document.querySelector(".clear");
const inputGridSize = document.querySelector("#grid-size");
const pInputGridSizeValue = document.querySelector("#grid-size-value");
// VARIABLES
let defaultColor="black";
let defaultSize=16;

// EVENT LISTENERS
inputGridSize.oninput = (e) => {updatePGridsizeValue(parseInt(e.target.value))}
inputGridSize.onchange = (e) => {createGrid(parseInt(e.target.value))}
container.onmousemove = () => {painting(defaultColor)} // 'onmousemove' se dispara continuamente mientras el ratón se mueve dentro del elemento.

// FUNCTIONS

const createGrid = (size) => { // Crea la cuadricula
    container.innerHTML="";
    for(let i=0; i<size*size; i++){
        const celda = document.createElement("div");
        celda.classList.add("celda");
        celda.style.cssText=`width: calc(600px / ${size}); height: calc(600px / ${size}); box-sizing: border-box; cursor: pointer; border: 1px solid black;`;
        
        celda.onmousemove=(e)=>{painting(e)}// 'onmousemove' se dispara continuamente mientras el ratón se mueve dentro del elemento.

        container.appendChild(celda);
    }
}
const updatePGridsizeValue = (value) => {// Actualiza el texto del parrafo en tiempo real
    pInputGridSizeValue.textContent = value;
    
}

const painting = (e) => { // Pinta la celda
    e.target.style.backgroundColor = defaultColor; // e hace referencia al evento y e.target hace referencia al elemento HTML especifico que fue objetivo del evento
}

// CODIGO A EJERCUTAR DESPUES DE QUE LA PAGINA ESTA COMPLETAMENTE CARGADA
window.onload = () => {
    createGrid(defaultSize)
    pInputGridSizeValue.textContent=inputGridSize.value;
}



