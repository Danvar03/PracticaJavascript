
export default class Electrodomestico {

    constructor(opcProcedencia, consumo) {
        this.consumo = consumo;
        this.opcProcedencia = opcProcedencia;
        this.precio = this.calcularPrecioTotal;
    }

    obtenerValorProcedencia() {
        return (this.opcProcedencia === "Nacional") ? 250_000 : 350_000;
    }

    obtenerValorConsumo() {
        switch (this.consumo) {
            case "A":
                return 450000;           
            case "B":
               return  350000;            
            case "C":
                return 250000;
            default:
             return 0;
        }
    }

    calcularPrecioBase() {
        return this.obtenerValorConsumo() + this.obtenerValorProcedencia();

    }
    get calcularPrecioTotal() {
        return this.calcularPrecioBase();

    }
}