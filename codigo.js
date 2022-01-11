document.getElementById('altaUsuario').addEventListener("click",mostrarFormulario,false);
document.getElementById('alquilarPista').addEventListener("click",mostrarFormulario,false);
frmAltaUsuario.addEventListener("click",altaUsuario,false);
var oGestion = new Gestion();
function altaUsuario() {
    console.log("Hola");
}
function mostrarFormulario(){
    ocultarTodosFormularios();
    oEvento = window.event;
    oFormulario = oEvento.srcElement;
    switch(oFormulario.textContent){
        case "Alta Usuario" :
            frmAltaUsuario.style.display = "block";
            break;
        case "Alquilar Pista" :
            frmAltaReserva.style.display = "block";
            break;


    }
}
function ocultarTodosFormularios() {
    let oFurmlarios = document.querySelectorAll("form");
    for(let oFor of oFurmlarios){
        oFor.style.display = "none";
    }
}

function hacerReserva(){
    let nomReserva = frmAltaReserva.nombreReserva.value;
    let descripcionReserva = frmAltaReserva.descripcionReserva.value;
    let diaReserva = new Date(frmAltaReserva.diaReserva.value);
    let StringInicioReserva = frmAltaReserva.horaInicioReserva.value;
    let arrayHora = StringInicioReserva.split(":");
    let fechaReserva = new Date(diaReserva.getFullYear(), diaReserva.getMonth() , diaReserva.getDay(), arrayHora[0] ,arrayHora[1] ,00,00);
    let fechaFin = new Date (fechaReserva);
    fechaFin.setHours(fechaReserva.getHours()+1); 
    console.log(fechaReserva);
    console.log(fechaFin);
    

}
