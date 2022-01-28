"use strict";
class Gestion {
    constructor() {
        this.aUsuarios = [];
        this.aClases=[];
        this.aPistas= [];
    }
    get usuarios(){
        return this.aUsuarios;
    }
    get pistas () {
        return this.aPistas;
    }
    get clases() {
        return this.aClases;
    }
    altaUsuario(oUsuario){
        if (oGestion.aUsuarios.filter(oUsu => oUsu.DNI == oUsuario.DNI).length == 0){
            oGestion.aUsuarios.push(oUsuario);
            return "Alta OK";
        }else {
            return "Ya hay un usuario con ese DNI";
        }
    }
    modificarUsuario(sDNIABuscar,sDNIAGuardar,sNombreApe,iEdad,bSexo,bEsInstructor){

        let aUsuario = oGestion.aUsuarios.filter(oUsu => oUsu.DNI == sDNIABuscar);
        aUsuario[0].DNI = sDNIAGuardar;
        aUsuario[0].NombreAp = sNombreApe;
        aUsuario[0].Edad = iEdad;
        aUsuario[0].Sexo = bSexo;
        aUsuario[0].EsInstructor = bEsInstructor;
        return "Modificado Ok";
    }
    buscarUsuario(sDNI){
        let oUsuario = oGestion.aUsuarios.filter(oUsu => oUsu.DNI==sDNI);
        if(oUsuario.length == 0){
            return null;
        }else {
            return oUsuario[0];
        }
 
    }
    altaPista(oPista){
        if(oGestion.aPistas.filter(oP => oP.id == oPista.id).length == 0){
            oGestion.aPistas.push(oPista);
            return "Alta Ok";
        }else {
            return "Ya hay una pista con el mismo número"
        }
    }
    altaReserva(oReserva)
    {
        let message="";
        let bYaEstaReservada=false;
        let pista = obtenerPista(oReserva.pista);

        //Comprobrar que el usuario este registrado .

        if(oGestion.buscarUsuario(oReserva.dniReserva)==null) //existe.
            message="El usuario no esta registrado en la web.";
        else
    {   

        for(let reserva of pista.reservas)
        {
            if(oReserva.dFechaReserva > reserva.dFechaReserva && oReserva.dFechaReserva < reserva.dFechaFin)
                bYaEstaReservada=true;
        }

        if(bYaEstaReservada)
        message = "Lo sentimos esa pista ya esta reservada a esa hora.";

        else{
           pista.reservas.push(oReserva);
           message="Se realizo la reserva de la pista de forma correcta.";
        }
    }
        return message;
    }
    altaClase(oClase){
        if(oGestion.aClases.filter(oCla => oCla.ID == oClase.ID).length == 0){
            let oInstructor = oGestion.buscarUsuario(oClase.Instructor);
            if(oInstructor!=null){
                if(oInstructor.EsInstructor == true){
                    oGestion.aClases.push(oClase);
                    return "Alta Clase Ok";
                }else {
                    return "El DNI es válido pero no es un instrcutor";
                }

            }else {
                return "No existe un instructor con ese DNI";
            }

        }else {
            return "Ya exise una clase con ese ID";
        }
    }
    modificarClase(iID,dtInicio,dtFin){
        let aClase = oGestion.aClases.filter(aCla => aCla.ID == iID);
        aClase[0].Inicio = dtInicio;
        aClase[0].Fin = dtFin;
        return oGestion.aClases
    }

    apuntarseClase(sDNI,iIDClase){
        let oUsuario = oGestion.buscarUsuario(sDNI);
        let oClase = oGestion.aClases.filter(oClase => oClase.ID == iIDClase)[0];
        if(oUsuario!=null){
            if(oClase.Usuarios.length<oClase.Capacidad){
                if(oClase.Usuarios.filter(oUsu => oUsu.DNI == oUsuario.DNI).length == 0){
                    if (oUsuario.DNI!=oClase.Instructor) {
                        oClase.Usuarios.push(oUsuario);
                        return "Apuntado Correctamente";
                    }else {
                        return "El usuario es el instructor de la clase";
                    }

                }else {
                    return "Ya estas apuntando en esta clase";
                }
            }else {
                return "La clase está completa";
            }
        }else {
            return "No existe un usuario con ese DNI";
        }
    }
}
class Pista{
    constructor (sNombre,iNumPista)
    {
      this.sNombre = sNombre;
      this.iNumPista = iNumPista; 
      this.aReservas = [];
    }
    get reservas(){
        return this.aReservas;
    }
    get id(){
        return this.iNumPista;
    }
    get nombre(){
        return this.sNombre;
    }
   
}

class Reserva{
    constructor (sNombreReserva,sDescripcion,dFechaReserva,dFechaFin ,iIdPista,sUsuarioReserva)
    {
      this.sNombreReserva = sNombreReserva;
      this.sDescripcion = sDescripcion; 
      this.dFechaReserva = dFechaReserva;
      this.dFechaFin = dFechaFin;
      this.iIdPista = iIdPista;
      this.sUsuarioReserva = sUsuarioReserva;
    }
    get Nombre(){
        return this.sNombreReserva;
    }
    get Descripcion(){
        return this.sDescripcion
    }
    get pista(){
        return this.iIdPista;
    }
    get fechaIni(){
        return this.dFechaReserva;
    }
    get fechaFin(){
        return this.dFechaFin;
    }
    get dniReserva(){
        return this.sUsuarioReserva;
    }
}
class Usuario {
    constructor(sNombreAp,sDNI,iEdad,bSexo,bEsInstructor){
        this.sNombreAp = sNombreAp;
        this.sDNI = sDNI;
        this.iEdad = iEdad;
        this.bSexo = bSexo;//true hombre, false mujer
        this.bEsInstructor = bEsInstructor;
    }
    get NombreAp(){
        return this.sNombreAp;
    }
    set NombreAp(sNombreAp){
        this.sNombreAp = sNombreAp;
    }
    get DNI(){
        return this.sDNI;
    }
    set DNI(sDNI){
        this.sDNI = sDNI;
    }
    get Edad() {
        return this.iEdad;
    }
    set Edad(iEdad){
        this.iEdad = iEdad;
    }
    get EsInstructor(){
        return this.bEsInstructor
    }
    set EsInstructor(bEsInstructor){
        this.bEsInstructor = bEsInstructor;
    }
    get Sexo(){
        return this.bSexo;
    }
    set Sexo(bSexo){
        this.bSexo = bSexo    
    }

}

class Clase {
    constructor(iIdClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,iIdInstructor){
        this.iIdClase = iIdClase;
        this.sNombre = sNombre;
        this.sDescripcion = sDescripcion;
        this.dtInicio = new Date(dtInicio);
        this.dtFin = new Date(dtFin);
        this.iCapacidad = iCapacidad;
        this.sTipoActividad = sTipoActividad;
        this.aUsuarios = [];
        this.iIdInstructor = iIdInstructor;
    }
    get ID(){
        return this.iIdClase;
    }
    get Nombre(){
        return this.sNombre;
    }
    get Usuarios(){
        return this.aUsuarios;
    }
    set Usuarios(aUsuarios){
        this.aUsuarios = aUsuarios;
    }
    get Inicio(){
        return this.dtInicio;
    }
    set Inicio(dtInicio){
        this.dtInicio = dtInicio;
    }
    get Fin(){
        return this.dtFin;
    }
    set Fin(dtFin){
        this.dtFin = dtFin;
    }
    get Capacidad(){
        return this.iCapacidad;
    }
    get Instructor(){
        return this.iIdInstructor;
    }
    get Descripcion(){
        return this.sDescripcion;
    }
    get Actividad(){
        return this.sTipoActividad;
    }
}

function obtenerPista(idPista)
{
    for (let pista of oGestion.aPistas)
    {
        if(pista.id == idPista)
            return pista;    
    }
}
