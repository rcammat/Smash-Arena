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

class Pista{
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
