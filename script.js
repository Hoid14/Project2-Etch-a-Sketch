const container=document.querySelector("#container");
let paint=false;
let colorBoolean=true; // true=color mode, false=eraser mode




// Controlar el tamaño de las celdas

const gridSizeValue=document.querySelector("#grid-size-value");
const gridSize=document.querySelector("#grid-size");
gridSizeValue.textContent=gridSize.value;
let gridValue=parseInt(gridSize.value);


// Cuando se cambia el input se vuelve a crear las celdas
gridSize.addEventListener("input",()=>{
    gridSizeValue.textContent=gridSize.value;
})

// Crea las celdas para pintar en ellas

const createGrig=(gridValue)=>{
    for(let i=0;i<gridValue*gridValue;i++){
        const celda=document.createElement("div");
        celda.classList.add("celda");
        celda.style.cssText=`width: calc(600px / ${gridValue}); height: calc(600px / ${gridValue}); box-sizing: border-box; cursor: pointer;`;
        
         /* box-sizing: Asegura que el borde no aumente el tamaño de la celda */
        
        container.appendChild(celda);
    }
};






// Selecciona el color con el que vamos a pintar
const colorPicker=document.querySelector("#color-picker");
let currentColor=colorPicker.value;// color con el que se esta pintando
let currentColorPicker=colorPicker.value;// color que se selecciona en el colorPicker
colorPicker.addEventListener("change",()=>{
    currentColorPicker=colorPicker.value;
    if(colorBoolean===true){
        currentColor=currentColorPicker;
    }
 });
// Presionar boton color
const colorMode=document.querySelector(".color-mode");
colorMode.addEventListener("click",()=>{
    currentColor=currentColorPicker;
    colorBoolean=true;
})
// Presionar boton eraser
const eraserMode=document.querySelector(".eraser-mode");
eraserMode.addEventListener("click",()=>{
    currentColor="white";
    colorBoolean=false;
})
// Selecciona todas las celdas
const celdas=document.querySelectorAll(".celda");
// Presionar boton clear
const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    celdas.forEach((celda)=>{
        celda.style.backgroundColor="white";
    });
})
// Cambiar el input id="grid-size" para cambiar el tamaño de las celdas
gridSize.addEventListener("change",()=>{
    container.innerHTML="";
    gridValue=parseInt(gridSize.value);
    for(let i=0;i<gridValue*gridValue;i++){
        const celda=document.createElement("div");
        celda.classList.add("celda");
        celda.style.cssText=`width: calc(600px / ${gridValue}); height: calc(600px / ${gridValue}); box-sizing: border-box; cursor: pointer; border: 1px solid black;`;
        
         /* box-sizing: Asegura que el borde no aumente el tamaño de la celda */
        
        container.appendChild(celda);
    }
    
})

// Controla la pintada de las celdas
celdas.forEach((celda)=>{
    celda.addEventListener("mousedown",()=>{// Se producen cuando el usuario hace clic en un botón del mouse. MouseDown se produce cuando el usuario presiona el botón del mouse
        celda.style.backgroundColor=currentColor;
        paint=true;
    });
    celda.addEventListener("mousemove",()=>{// Se produce cuando el usuario mueve el mouse.
        if(paint){ // solo se produce si paint es true
            celda.style.backgroundColor=currentColor;
        }
    });
    celda.addEventListener("mouseup",()=>{//MouseUp se produce cuando el usuario suelta el botón del mouse.
        paint=false;
    });
    
    celda.addEventListener("dragstart",(event)=>{//El dragstartevento se activa cuando el usuario comienza a arrastrar un elemento o selección de texto.
        if(paint){
            event.preventDefault(); // Evita el comportamiento de arrastre predeterminado
        }
        
    });
}


);




