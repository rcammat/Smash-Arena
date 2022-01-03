var oGestion =  new Gestion();

alert(oGestion.altaUsuario(new Usuario("Pepe","123456678e","prueba")));
alert(oGestion.altaUsuario(new Usuario("Pepe","123456678e","prueba")));
console.log(oGestion.altaUsuario(new Usuario("Carlos","123456789J","prueba")));
console.log(oGestion.modificarUsuario("123456789J","Juan","prueba2","Pendiente"));
oGestion.aEdificios.push(new Edificio("Nuevo Edificio",01,12345));// Creamos un edifico.
oGestion.aEdificios[0].pistas.push(new Pista("Pista 1",01,01));//En ese edificio creamos esta pista

console.log(oGestion.altaReserva(new Reserva("PepeReserva","Vamoh a jugar",new Date(01/02/2022),17,01,1)));//En esa pista creamos una reserva.
