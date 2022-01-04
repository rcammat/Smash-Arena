"use strict";
class Gestion {
    constructor() {
        this.aEdificios = [];
        this.aUsuarios = [];
        this.aMaterial=[];
        this.aClases=[];
    }
    altaUsuario(oUsuario){
        if (oGestion.aUsuarios.filter(oUsu => oUsu.DNI == oUsuario.DNI).length == 0){
            oGestion.aUsuarios.push(oUsuario);
            return true;
        }else {
            return false;
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
        oGestion.aEdificios[0].pistas[0].reservas.push(oReserva);
        return oGestion.aEdificios[0].pistas[0].reservas;
    }
    altaVentaMaterial(oMaterial){
    if(oGestion.aMaterial.filter(oMat => oMat.ID == oMaterial.ID).length == 0){
        oGestion.aMaterial.push(oMaterial);
        return true;
    }else {
        return false;
    }
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
        aClase[0].Nombre = sNombre;
        return oGestion.aClases
    }


}
class Edificio {
    constructor (sNombre,iId,iCp)
    {
      this.sNombre = sNombre;
      this.iId = iId; 
      this.iCp = iCp;
      this.aIdPistas = [];
    }
    get pistas(){
        return this.aIdPistas;
    }
  }
class Pista{
    constructor (sNombre,iNumPista,iIdEdificio)
    {
      this.sNombre = sNombre;
      this.iNumPista = iNumPista; 
      this.iIdEdificio = iIdEdificio;
      this.aReservas = [];
    }
    get reservas(){
        return this.aReservas;
    }
}

class Reserva{
    constructor (sNombreReserva,sDescripcion,dDiaReserva,iHoraInicio,iIdPista,iOcupacion)
    {
      this.sNombreReserva = sNombreReserva;
      this.sDescripcion = sDescripcion; 
      this.dDiaReserva = dDiaReserva;
      this.iHoraInicio = iHoraInicio;
      this.iIdPista = iIdPista;
      this.aIdsUsuarios = [];
      this.bOcupada = false;
      this.iOcupacion=iOcupacion;
    }
    get pista(){
        return this.iIdPista;
    }
}
class Usuario {
    constructor(sNombreAp,sDNI,sFoto){
        this.sNombreAp = sNombreAp;
        this.sDNI = sDNI;
        this.sFoto = sFoto;
        this.sEstado = "Pendiente";
        this.bEsSocio = false;
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
    set Foto(sFoto){
        this.sFoto = sFoto;
    }
    set Estado(sEstado){
        this.sEstado = sEstado;
    }
    set EsSocio(bEsSocio){
        this.bEsSocio = bEsSocio;
    }

}

class Clase {
    constructor(iIdClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,iOcupacion,iIdInstructor){
        this.iIdClase = iIdClase;
        this.sNombre = sNombre;
        this.sDescripcion = sDescripcion;
        this.dtInicio = dtInicio;
        this.dtFin = dtFin;
        this.iCapacidad = iCapacidad;
        this.sTipoActividad = sTipoActividad;
        this.iOcupacion = iOcupacion;
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

class Instructor {
    constructor(sNombre,sDNI,sFoto) {
        this.sNombre = sNombre;
        this.sDNI = sDNI;
        this.sFoto = sFoto;
        this.aClases = [];
    }
}
class Material {
    constructor(dtFechaHora,sNombre,iID,fPrecio,iCantidad,sDescripcion,bConsumible) {
        this.dtFechaHora = dtFechaHora;
        this.sNombre = sNombre;
        this.iID = iID;
        this.fPrecio = fPrecio;
        this.iCantidad = iCantidad;
        this.sDescripcion = sDescripcion;
        this.bConsumible = bConsumible;
    }
    set Nombre(sNombre) {
        this.sNombre= sNombre;
    }
    get Consumible() {
        return this.sConsumible;
    }
    get ID(){
        return this.iID;
    }

}