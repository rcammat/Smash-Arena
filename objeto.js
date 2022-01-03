
class Edificio {
    constructor (sNombre,iId,iCp,aIdPistas)
    {
      this.sNombre = sNombre;
      this.iId = iId; 
      this.iCp = iCp;
      this.aIdPistas = aIdPistas;
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
    constructor(sNombreAp,sDNI,sFoto,sEstado){
        this.sNombreAp = sNombreAp;
        this.sDNI = sDNI;
        this.sFoto = sFoto;
        this.sEstado = sEstado;
        this.aClases = [];
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