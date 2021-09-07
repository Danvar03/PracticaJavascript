import Electrodomestico from "./Electrodomestico.js";

export class Nevera extends Electrodomestico {
    constructor(procedencia, consumo, capacidad) {
        super(procedencia, consumo);
        this.capacidad = capacidad;
        this.precioTotal = this.PrecioNevera();

    }

    PrecioNevera() {
        if (this.capacidad > 120) {
            this.porcentaje = (this.capacidad - 120) / 10;
            this.incremento = super.calcularPrecio * 5 / 100;
            this.ValorAdicional = this.porcentaje * this.incremento;
            this.precioTotal = super.calcularPrecio + this.ValorAdicional;
            return this.precioTotal;
        }
        else {
            return super.calcularPrecio;
        }
    }
}