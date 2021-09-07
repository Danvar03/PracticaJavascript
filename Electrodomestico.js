
import Electrodomestico from "./Electrodomestico.js";

export class Electrodomestico {
    constructor(opcProcedencia, consumo){
        this.consumo= consumo;
        this.opcProcedencia = opcProcedencia;
        this.precio = this.obtenerValorConsumo()+this.obtenerValorProcedencia();
      
    }

    obtenerValorProcedencia(){
        var resultado =  this.opcProcedencia == 'Nacional' ? 250_000 : 350_000;
        return resultado;
    }

    obtenerValorConsumo(){
        switch (this.consumo){
            case "A":
                return  450_000;
            case "B":
                return 350_000;
            case "C":
                return 250_000;
        }
    }

    calcularPrecioBase(){
        return this.precio;
    }

}