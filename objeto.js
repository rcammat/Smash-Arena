"use strict";
class Gestion {
    constructor() {
        this.aUsuarios = [];
        this.aClases=[];
        this.aPistas= [];
    }
    altaUsuario(oUsuario){
        if (oGestion.aUsuarios.filter(oUsu => oUsu.DNI == oUsuario.DNI).length == 0){
            oGestion.aUsuarios.push(oUsuario);
            return "Alta OK";
        }else {
            return "Alta no OK";
        }
    }
    modificarUsuario(sDNI,sNombreApe,sFoto,sEstado){

        let aUsuario = oGestion.aUsuarios.filter(oUsu => oUsu.DNI == sDNI);
        aUsuario[0].DNI = sDNI;
        aUsuario[0].NombreAp = sNombreApe;
        aUsuario[0].Foto = sFoto;
        aUsuario[0].Estado = sEstado;
        return oGestion.aUsuarios;
    }
    borrarUsuario(sDNI){
        let aUsuariosAGuardar = oGestion.aUsuarios.filter(oUsu => oUsu.DNI != sDNI);
        oGestion.aUsuarios = aUsuariosAGuardar;
        return oGestion.aUsuarios;
    }
    buscarUsuario(sDNI){
        let oUsuario = oGestion.aUsuarios.filter(oUsu => oUsu.DNI==sDNI);
        if(oUsuario.length == 0){
            return null;
        }else {
            return oUsuario[0];
        }
 
    }
    altaReserva(oReserva)
    {
        let mesage="";
        if(existeEdificio(oReserva.edificio))
        {//Vemos si existe el edificio.
        var edificio = obtenerEdificio(oReserva.edificio);
        }
        else 
        mesage = "error";

        let pista = obtenerPista(oReserva.pista,edificio);

        pista.reservas.push(oReserva);

        return oGestion.aEdificios[0].pistas[0].reservas;
    }
    altaClase(oClase,aUsuarios){
        if(oGestion.aClases.filter(oCla => oCla.ID == oClase.ID).length == 0){
            oGestion.aClases.push(oClase);
            oGestion.aClases[oGestion.aClases.length-1].Usuarios=aUsuarios;
            return oGestion.aClases;
        }else {
            return false;
        }
    }
    modificarClase(iID,dtInicio,dtFin){
        let aClase = oGestion.aClases.filter(aCla => aCla.ID == iID);
        aClase[0].Inicio = dtInicio;
        aClase[0].Fin = dtFin;
        return oGestion.aClases
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
    get edificio(){
        return this.iIdEdificio;
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
    get pista(){
        return this.iIdPista;
    }
}
class Usuario {
    constructor(sNombreAp,sDNI,iEdad,bSexo,bEsInstructor){
        this.sNombreAp = sNombreAp;
        this.sDNI = sDNI;
        this.iEdad = iEdad;
        this.bSexo = bSexo;
        this.bEsInstructor = bEsInstructor;
        this.aClases = [];
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

}

class Clase {
    constructor(iIdClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,iIdInstructor){
        this.iIdClase = iIdClase;
        this.sNombre = sNombre;
        this.sDescripcion = sDescripcion;
        this.dtInicio = dtInicio;
        this.dtFin = dtFin;
        this.iCapacidad = iCapacidad;
        this.sTipoActividad = sTipoActividad;
        this.aUsuarios = [];
        this.iIdInstructor = iIdInstructor;
    }
    get ID(){
        return this.iIdClase;
    }
    set Usuarios(aUsuarios){
        this.aUsuarios = aUsuarios;
    }
    set Inicio(dtInicio){
        this.dtInicio = dtInicio;
    }
    set Fin(dtFin){
        this.dtFin = dtFin;
    }
}

function obtenerPista(idPista,edificio)
{
    for (let pista of edificio.pistas)
    {
        if(pista.id == idPista)
            return pista;    
    }
}
