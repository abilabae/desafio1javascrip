let valorInicial= document.getElementById("valorInicial")

let precioFinal=document.getElementById("precioFinal")

let cantidadFinal= document.getElementById("cantidadTotal")

let colorFinal= document.getElementById("colorFinal")

function calcularTotal(){
    
    let cantidadInput= document.getElementById("cantidad").value
    
    let colorInput= document.getElementById("color").value

    let precio= Number(valorInicial.innerHTML)
    
    let total= cantidadInput * precio
    
    precioFinal.innerHTML= total
    
    cantidadFinal.innerHTML= cantidadInput

    colorFinal.style.backgroundColor = colorInput
    



}