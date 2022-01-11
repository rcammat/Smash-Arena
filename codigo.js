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