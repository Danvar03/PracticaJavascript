export default class Electrodomestico {

    constructor(procedencia, consumo){
        this.consumo= consumo;
        this.procedencia = procedencia;
        this.precio = this.obtenerValorConsumo()+this.obtenerValorProcedencia();
      
    }

    obtenerValorProcedencia(){
        var resultado =  this.procedencia == 'Nacional' ? 250_000 : 350_000;
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

    get calcularPrecio(){
        return this.precio;
    }

}


