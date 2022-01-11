document.getElementById('altaUsuario').addEventListener("click",mostrarFormulario,false);
document.getElementById('modificarUsuario').addEventListener("click",mostrarFormulario,false);
document.getElementById('alquilarPista').addEventListener("click",mostrarFormulario,false);
frmAltaUsuario.addEventListener("click",altaUsuario,false);
var oGestion = new Gestion();

cargaPistas();


function altaUsuario() {     
let sNombreUsuario = document.querySelector(".nombreUsuario").value;     
let sDNI = document.querySelector(".dniUsuario").value;     
let iEdad = document.querySelector(".Edad").value;     
let bSexo = document.querySelectorAll(".bSexo");      
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
        case "Modificar Usuario" :
            frmModificarUsuario.style.display = "block";
            break;

    }
}
function ocultarTodosFormularios() {
    let oFormularios = document.querySelectorAll("form");
    for(let oFor of oFormularios){
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
   // console.log(fechaReserva);
    //console.log(fechaFin);

    let pistaSelecionada = frmAltaReserva.seleccionPistas.value;

    console.log(pistaSelecionada);

}


function cargaPistas(){
    //Provisional 
    oGestion.aPistas.push(new Pista("Pista 1",1));
    oGestion.aPistas.push(new Pista("Pista 2",2));
    oGestion.aPistas.push(new Pista("Pista 3",3));



    //Esto si sirve
    oCapa = document.getElementById("comboPistas");
    oCapa.appendChild(document.createElement("SELECT"));

    //console.log(oCapa);

    let select = oCapa.lastChild;
    select.id="seleccionPistas";
    select.name="seleccionPistas";


    for (oPista of oGestion.aPistas){
        select.appendChild(document.createElement("OPTION"));
        select.lastChild.value = oPista.id;
        select.lastChild.textContent = oPista.nombre;
    }

}