class Gestion {
    constructor() {
        this.aEdificios = [];
        this.aUsuarios = [];
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
  }
class Pista{
    constructor (sNombre,iNumPista,iIdEdificio)
    {
      this.sNombre = sNombre;
      this.iNumPista = iNumPista; 
      this.iIdEdificio = iIdEdificio;
    }
}

class Reserva{
    constructor (sNombreReserva,sDescripcion,dDiaReserva,iHoraInicio,iIdPista,aIdsUsuarios,bOcupada,iOcupacion)
    {
      this.sNombreReserva = sNombreReserva;
      this.sDescripcion = sDescripcion; 
      this.dDiaReserva = dDiaReserva;
      this.iHoraInicio = iHoraInicio;
      this.iIdPista = iIdPista;
      this.aIdsUsuarios = aIdsUsuarios;
      this.bOcupada = bOcupada;
      this.iOcupacion=iOcupacion;
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
    altaUsuario(oUsuario){
        if (oGestion.aUsuarios.filter(oUsu => oUsu.sDNI == oUsuario.sDNI).length == 0){
            oGestion.aUsuarios.push(oUsuario);
            return true;
        }else {
            return false;
        }
    }
    get sDNI(){
        return this.sDNI;
    }
}

class Clase {
    constructor(iIdClase,sNombre,sDescripcion,dtInicio,dtFin,iCapacidad,sTipoActividad,sOcupacion,iIdInstructor){
        this.iIdClase = iIdClase;
        this.sNombre = sNombre;
        this.sDescripcion = sDescripcion;
        this.dtInicio = dtInicio;
        this.dtFin = dtFin;
        this.iCapacidad = iCapacidad;
        this.sTipoActividad = sTipoActividad;
        this.sOcupacion = sOcupacion;
        this.aUsuarios = [];
        this.iIdInstructor = iIdInstructor;
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