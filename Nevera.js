import Electrodomestico from "./Electrodomestico.js";

export class Nevera extends Electrodomestico{
    constructor(Procedencia, consumo, valorCapacidad){
        super(Procedencia, consumo);
        this.valorCapacidad = valorCapacidad;
       
    }

    calcularporcCapacidad(){
        if (this.valorCapacidad>120) {
            this.porceCapacidad =(((this.valorCapacidad - 120) * 5) / 1000);
        } else{
            this.porceCapacidad = 0;
        }
    }

    calcularCapacidad(){
        this.calcularporcCapacidad();
        this.valorCapacidad=this.precio*this.porceCapacidad;
        return this.valorCapacidad;
    }

    calcularPrecioBase(){
        super.calcularPrecioBase();
        return this.precio+this.calcularCapacidad();
    }
}