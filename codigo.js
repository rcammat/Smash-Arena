//Añadir eventos
document.getElementById('altaUsuario').addEventListener("click",mostrarFormulario,false);
document.getElementById('modificarUsuario').addEventListener("click",mostrarFormulario,false);
document.getElementById('altaPista').addEventListener("click",mostrarFormulario,false);
document.getElementById('alquilarPista').addEventListener("click",mostrarFormulario,false);
document.getElementById('crearClase').addEventListener("click",mostrarFormulario,false);
document.getElementById('apuntarClase').addEventListener("click",mostrarFormulario,false);
frmAltaUsuario.botonEnviar.addEventListener("click",altaUsuario,false);
document.getElementById('comboUsuarios').addEventListener("change",mostrarDatosUsuario,false);
frmModificarUsuario.botonEnviar.addEventListener("click",modificarUsuario,false);
frmAltaClases.botonEnviar.addEventListener("click",altaClase,false);
frmAltaReserva.botonEnviar.addEventListener("click",hacerReserva,false);

//Creamos el objeto gestion y despues cargamos el documento XML
var oGestion = new Gestion();
var oXML = loadXMLDoc("xmlSMASH-ARENA.xml");

//Llamada a todas las funciones principales
cargarUsuarios();
cargarPistas();
cargarClases();
cargarComboPistas();
cargarComboUsuarios();
cargarComboClases();

//Alta Usuario
function altaUsuario() {     
    let sNombreUsuario = document.querySelector(".nombreUsuario").value;     
    let sDNI = document.querySelector(".dniUsuario").value;     
    let iEdad = document.querySelector(".Edad").value;     
    let bSexo;
    let bInstructor;
    if(document.getElementById('radioSexoHombreAltaUsuario').checked){
        bSexo=true;
    }else {
        bSexo=false;
    }
    if(document.getElementsByName('checkInstructor')[0].checked){
        bInstructor=true;
    }else {
        bInstructor=false;
    }
    if(sNombreUsuario == "" || sDNI == "" || iEdad == "" ){
        alert("Debes rellenar todos los campos");
    }else {
        alert(oGestion.altaUsuario(new Usuario(sNombreUsuario,sDNI,iEdad,bSexo,bInstructor)));
        cargarComboUsuarios();
        frmAltaUsuario.reset();
        ocultarTodosFormularios();
    }
}

//Modificar Usuario
function modificarUsuario() {
    let sNombreUsuario = document.querySelector(".nombreUsuarioModificar").value;
    let sDNIABuscar = document.getElementById("comboUsuarios");
    sDNIABuscar = sDNIABuscar.children[document.getElementById("comboUsuarios").selectedIndex].value;     
    let sDNIAGuardar = document.querySelector(".dniUsuarioModificar").value;     
    let iEdad = document.querySelector(".edadModificar").value;
    let bSexo;
    let bInstructor;
    if(document.getElementById('radioSexoHombre').checked){
        bSexo=true;
    }else {
        bSexo=false;
    }
    if(document.getElementById('checkInstructorModificar').checked){
        bInstructor = true;
    } else {
        bInstructor = false;
    }
    if(sNombreUsuario == "" || iEdad == "" ){
        alert("Debes rellenar todos los campos");
    }else {
        alert(oGestion.modificarUsuario(sDNIABuscar,sDNIAGuardar,sNombreUsuario,iEdad,bSexo,bInstructor));
        cargarComboUsuarios();
        frmModificarUsuario.reset();
        ocultarTodosFormularios();
    }
}

function mostrarFormulario(oE){
    ocultarTodosFormularios();
    oEvento = oE || window.event;
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
        case "Alta Clase" :
            frmAltaClases.style.display = "block";
            break;
        case "Alta Pista" :
            frmAltaPista.style.display = "block";
            break;
        case "Apuntarse a una Clase" :
            frmApuntarClase.style.display = "block";
            break;
    }
}


function hacerReserva()
{
    let idReserva = frmAltaReserva.idReserva.value;
    let nomReserva = frmAltaReserva.nombreReserva.value;
    let descripcionReserva = frmAltaReserva.descripcionReserva.value;
    //Para hacer la fecha de inicio y de fin con sus horas.
    let diaReserva = new Date(frmAltaReserva.diaReserva.value);
    let StringInicioReserva = frmAltaReserva.horaInicioReserva.value;
    let arrayHora = StringInicioReserva.split(":");
    let fechaReserva = new Date(diaReserva.getFullYear(), diaReserva.getMonth() , diaReserva.getDay(), arrayHora[0] ,arrayHora[1] ,00,00);
    let fechaFin = new Date (fechaReserva);
    fechaFin.setHours(fechaReserva.getHours()+1); 
   

    let pistaSelecionada = frmAltaReserva.comboPistas.value;


    oReserva = new Reserva(nomReserva,descripcionReserva,fechaReserva,fechaFin,pistaSelecionada,idReserva);
    console.log(oReserva);

    alert(oGestion.altaReserva(oReserva));

}

function altaClase(){     
    let iIdClase = document.querySelector(".idClase").value;     
    let sNombreClase = document.querySelector(".nombreClase").value;     
    let sDescripcionClase = document.querySelector(".descripcionClase").value;     
    let dtDiaInicio = new Date(document.querySelector('.diaInicioClase').value);     
    let dtDiaFin = new Date(document.querySelector('.diaFinClase').value);     
    let iCapacidad = document.querySelector('.capacidadClase').value;     
    let sTipoClase = document.querySelector('.tipoClase').value;     
    let idInstructor = document.querySelector('.idInstructorClase').value;
    
    alert(oGestion.altaClase(new Clase(iIdClase,sNombreClase,sDescripcionClase,dtDiaInicio,dtDiaFin,iCapacidad,sTipoClase,idInstructor)));
}
function cargarPistas(){
    //Cargarmos las pista desde el XML
    oPistas = oXML.getElementsByTagName("pista");
    for(let oPista of oPistas){
        let nombrePista = oPista.getElementsByTagName("nombre")[0].textContent;
        let numeroPista = oPista.getElementsByTagName("numero")[0].textContent;
        
        oGestion.altaPista(new Pista(nombrePista,numeroPista));
    }
}
function cargarComboUsuarios() {
    let oCapa = document.getElementById('comboUsuarios');
    while(oCapa.hasChildNodes()){
        oCapa.removeChild(oCapa.firstChild);
    }
    oCapa.appendChild(document.createElement("OPTION"))
    oCapa.lastChild.value = "nulo";
    oCapa.lastChild.textContent = "Selecciona un usuario...";
    for(let usuario of oGestion.aUsuarios){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = usuario.DNI;
        oCapa.lastChild.textContent = usuario.NombreAp
    }
}
function mostrarDatosUsuario() {
    let sDNI = document.getElementById('comboUsuarios').value;
    if( sDNI != "nulo"){
        let usuario = oGestion.buscarUsuario(sDNI);
        document.querySelector(".nombreUsuarioModificar").value = usuario.NombreAp;
        document.querySelector(".dniUsuarioModificar").value = usuario.DNI;
        document.querySelector(".edadModificar").value = usuario.Edad;
        if(usuario.Sexo==true){
            document.getElementById('radioSexoHombre').checked = true;
        }else {
            document.getElementById('radioSexoMujer').checked = true;
        }
        if(usuario.EsInstructor==true){
            document.getElementById("checkInstructorModificar").checked = true;
        }else {
            document.getElementById("checkInstructorModificar").checked = false;
        }
        
    }else {
        alert("Seleccione un usuario");
        frmModificarUsuario.reset();
    }
}
function cargarUsuarios() {
    var oUsuarios = oXML.getElementsByTagName("usuario");
    for(let oUsu of oUsuarios){
        let sNombreUsuario = oUsu.getElementsByTagName("nombre")[0].textContent;
        let sDNI = oUsu.getElementsByTagName("dni")[0].textContent;
        let iEdad = oUsu.getElementsByTagName("edad")[0].textContent;
        let bSexo = oUsu.getElementsByTagName("sexo")[0].textContent;
        let bInstructor = oUsu.getElementsByTagName("instructor")[0].textContent;
        if(bSexo=="Masculino"){
            bSexo=true;
        }else {
            bSexo=false
        }
        if(bInstructor=="Si"){
            bInstructor=true
        }else {
            bInstructor=false;
        }
        oGestion.altaUsuario(new Usuario(sNombreUsuario,sDNI,iEdad,bSexo,bInstructor)); 
    }
}
function ocultarTodosFormularios() {
    let oFormularios = document.querySelectorAll("form");
    for(let oFor of oFormularios){
        oFor.style.display = "none";
    }
}
function cargarComboPistas() {
    //Esto si sirve
    oCapa = document.getElementById("comboPistas");
    for (oPista of oGestion.aPistas){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = oPista.id;
        oCapa.lastChild.textContent = oPista.nombre;
    }
    
}

function cargarClases(){
    var oClases = oXML.getElementsByTagName("clase");
    for(oCla of oClases){
        let iIDClase = oCla.getElementsByTagName("iIdClase")[0].textContent;
        let sNombre = oCla.getElementsByTagName("sNombre")[0].textContent;
        let sDescripcion = oCla.getElementsByTagName("sDescripcion")[0].textContent;
        let dtInicio = new Date(oCla.getElementsByTagName("dtInicio")[0].textContent);
        let dtFin = new Date(oCla.getElementsByTagName("dtFin")[0].textContent);
        let iCapacidad = oCla.getElementsByTagName("iCapacidad")[0].textContent;
        let sTipoActividad = oCla.getElementsByTagName("sTipoActividad")[0].textContent;
        let siIdInstructor = oCla.getElementsByTagName("siIdInstructor")[0].textContent;

        oGestion.altaClase(new Clase(iIDClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,siIdInstructor));
    }
}

function cargarComboClases(){
    let oCapa = frmApuntarClase.comboClasesApuntarseClase;
    while(oCapa.hasChildNodes()){
        oCapa.removeChild(oCapa.firstChild);
    }
    oCapa.appendChild(document.createElement("OPTION"))
    oCapa.lastChild.value = "nulo";
    oCapa.lastChild.textContent = "Selecciona un usuario...";
    for(let clase of oGestion.aClases){
        oCapa.appendChild(document.createElement("OPTION"));
        oCapa.lastChild.value = clase.ID;
        oCapa.lastChild.textContent = clase.Nombre+" "+clase.Inicio.getHours()+"H";
    }


}
function loadXMLDoc(filename)
{
	if (window.XMLHttpRequest)
	  {
	  xhttp=new XMLHttpRequest();
	  }
	else // code for IE5 and IE6
	  {
	  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xhttp.open("GET",filename,false);
	
	xhttp.send();
	
	return xhttp.responseXML;
} 