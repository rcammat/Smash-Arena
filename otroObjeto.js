class Gestion {
    constructor() {
        this.aEdificios = [];
        this.aUsuarios = [];
    }
    altaUsuario(oUsuario){
        if (oGestion.aUsuarios.filter(oUsu => oUsu.DNI == oUsuario.DNI).length == 0){
            oGestion.aUsuarios.push(oUsuario);
            return true;
        }else {
            return false;
        }
    }
    altaReserva(oReserva)
    {
        oGestion.aEdificios[0].pistas[0].reservas.push(oReserva);
        return oGestion.aEdificios[0].pistas[0].reservas;
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
    get DNI(){
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
