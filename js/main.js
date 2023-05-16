
let origen = prompt ("VUELOS DESDE BUENOS AIRES!! \n \n Ingrese origen:").toUpperCase();

while ((origen != "BUENOS AIRES")) { 

     origen = prompt ("VUELOS DESDE BUENO AIRES!! \n \n Ingrese origen:").toUpperCase();

}


let destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n La Pampa \n Santiago del Estero").toUpperCase();

while ((destino != "CORDOBA") && (destino != "MENDOZA") && (destino != "SAN JUAN") && (destino != "SAN LUIS") && (destino != "SANTA FE") && (destino != "LA PAMPA") && (destino != "SANTIAGO DEL ESTERO")) { 

    destino = prompt ("Ingrese lugar de Destino:\n \n Córdoba \n Mendoza \n San Juan \n San Luis \n Santa Fe \n La Pampa \n Santiago del Estero").toUpperCase();
}


let CantidadPasajeros =parseInt (prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));

while ((CantidadPasajeros != 1) && (CantidadPasajeros != 2) && (CantidadPasajeros != 3) && (CantidadPasajeros != 4) && (CantidadPasajeros != 5) && (CantidadPasajeros != 6)) {

    CantidadPasajeros =parseInt (prompt ("Ingrese cantidad de pasajeros: (Maximo 6 pax)"));

} 


console.log(origen);
console.log(destino);
console.log(CantidadPasajeros);

const CalcularValorVuelo = (destino) => {

switch (destino) {
    case "CORDOBA":
        
        ValorVuelo = 15900
        
        break;

    case "MENDOZA":
        
        ValorVuelo = 24240
        
        break;
    case "SAN JUAN":
        
        ValorVuelo = 66433
        
        break;

    case "SAN LUIS":
        
        ValorVuelo = 57131
        
        break;

    case "LA PAMPA":
        
        ValorVuelo = 65457
        
        break;

    case "SANTIAGO DEL ESTERO":
        
        ValorVuelo = 47618
        
        break;
    
    
    default:

        ValorVuelo = 000000
        break;
}
    
    return ValorVuelo;
}
    
const PrecioFinal = (ValorVuelo, CantidadPasajeros) => {

    return ValorVuelo * CantidadPasajeros;
}

let valorDelVuelo = CalcularValorVuelo (destino);

console.log (valorDelVuelo);

console.log ("Valor del vuelo a :" + destino + "\n" + CantidadPasajeros +" "+ "Pasajeros" +" "+ "$" + PrecioFinal(valorDelVuelo, CantidadPasajeros) + " " + "IVA incluido");
 
let salida = "Valor del vuelo a :" + destino + "\n" + CantidadPasajeros +" "+ "Pasajeros" +" "+ "$" + PrecioFinal(valorDelVuelo, CantidadPasajeros) + " " + "IVA incluido";
alert (salida);
