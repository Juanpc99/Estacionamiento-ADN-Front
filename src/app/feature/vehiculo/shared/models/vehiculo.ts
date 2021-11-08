export class Vehiculo{
    id: number;
    placa: string;
    idEspacio: number;
    tipoVehiculo: string;
    modeloVehiculo: string;
    nombrePropietario: string;
    apellidoPropietario: string;
    fechaEntrada: Date;
    fechaSalida: Date;
    totalPagar: number;
    precioBaseHora: number;


    constructor(id: number, placa: string, idEspacio: number, tipoVehiculo: string, modeloVehiculo: string,
        nombrePropietario: string, apellidoPropietario: string, fechaEntrada: Date, fechaSalida: Date,
        totalPagar: number, precioBaseHora: number){

            this.id = id;
            this.placa = placa;
            this. idEspacio = idEspacio;
            this.tipoVehiculo = tipoVehiculo;
            this.modeloVehiculo = modeloVehiculo;
            this.nombrePropietario = nombrePropietario;
            this.apellidoPropietario = apellidoPropietario;
            this.fechaEntrada =fechaEntrada;
            this.fechaSalida = fechaSalida;
            this.totalPagar = totalPagar;
            this.precioBaseHora = precioBaseHora;
        }
}