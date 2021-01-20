let presupuesto = prompt('Ingreso tu presupuesto semanal');
let cambio = presupuesto
document.getElementById("valor-presupuesto").innerHTML = presupuesto;
document.getElementById("valor-restante").innerHTML = presupuesto;   //Cambiar elementos en el HTML

const button = document.getElementById('button');  //Obtener el elemento por el ID
button.addEventListener('click', getInfo =() => {  //esta pendiendo cuando ocurra el evento click en el botón
    const gastos = document.getElementById('gastos').value;
    const cantidad = document.getElementById('cantidad').value;
    const listaDeGastos = {gastos, cantidad};
    mostrarGasto(listaDeGastos);
    cambioPresupuesto(listaDeGastos);
});

const mostrarGasto = (listaDeGastos) => {
    console.log(listaDeGastos)
}

const cambioPresupuesto = ({ cantidad }) => {
    cambio = cambio - cantidad;
    if (cambio <= 0) {
        cambio = 0;
        document.getElementById("valor-restante").innerHTML = cambio.toString();
    }else{
        document.getElementById("valor-restante").innerHTML = cambio.toString();
    }
    colorPorcentaje(cambio)
}

const colorPorcentaje = (cambio) => {
    let presupuesto_50 = (presupuesto / 100) * 50;
    let presupuesto_75 = (presupuesto / 100) * 25;
    console.log(presupuesto_75)
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






