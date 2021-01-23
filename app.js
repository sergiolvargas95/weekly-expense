let presupuesto = prompt('Ingreso tu presupuesto semanal');
let cambio = parseInt(presupuesto);
document.getElementById("valor-presupuesto").innerHTML = presupuesto;
document.getElementById("valor-restante").innerHTML = presupuesto;   //Cambiar elementos en el HTML

const button = document.getElementById('button');  //Obtener el elemento por el ID
button.addEventListener('click', getInfo =() => {  //esta pendiendo cuando ocurra el evento click en el botón
    const gastos = document.getElementById('gastos').value;
    const cantidad = document.getElementById('cantidad').value;
    const listaDeGastos = {gastos, cantidad};
    let resultadoCambio = cambioPresupuesto(listaDeGastos);
    mostrarGasto(listaDeGastos, resultadoCambio);
});

const mostrarGasto = (listaDeGastos, resultadoCambio) => {
    if(resultadoCambio < 0){
        console.log("No puedes hacer ese gasto.")
    }else{
        const $div = document.createElement('div'),
        $span = document.createElement('span'),
        $span2 = document.createElement('span'),
        $elementoGasto = document.createTextNode(listaDeGastos.gastos),
        $elementoValor = document.createTextNode(listaDeGastos.cantidad),
        $bloques = document.querySelector(".container__rigth");

        $div.classList.add("mostrar-gasto");
        $span.classList.add("mostrar-gasto__elemento");
        $span2.classList.add("mostrar-gasto__valor");


        $span.appendChild($elementoGasto);
        $span2.appendChild($elementoValor);
        $div.appendChild($span);
        $div.appendChild($span2);
        $bloques.appendChild($div);
    }
}

const cambioPresupuesto = ({ cantidad }) => {
    cantidad = parseInt(cantidad);
    cambio = cambio - cantidad;
    console.log(cambio)
    if (cambio < 0) {
        alert("No puedes hacer este gasto");
        cambio = cambio + cantidad;
        console.log(cambio + ` dentro del if`)
    }else{
        document.getElementById("valor-restante").innerHTML = cambio.toString();
        colorPorcentaje(cambio);
    }
    return cambio;
}

const colorPorcentaje = (cambio) => {
    let presupuesto_50 = (presupuesto / 100) * 50;
    let presupuesto_75 = (presupuesto / 100) * 25;
    let restante = document.getElementById('restante-container');

    if (cambio < presupuesto_50 && cambio > presupuesto_75){
        restante.style.backgroundColor = '#fff1c6';
    }
    if (cambio < presupuesto_75) {
        restante.style.backgroundColor = '#f7d1d7';
        restante.style.fontWeight = 'bold';
        restante.style.color = 'red';
    }
}






