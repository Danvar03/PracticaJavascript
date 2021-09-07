import Electrodomesticos from "./Electrodomestico.js";

export class Televisor extends Electrodomesticos{
    constructor(procedencia, consumo, tamaño, sintotizador){
        super(procedencia, consumo);
        this.tamaño = tamaño;
        this.sintotizador = sintotizador;
        this.PrecioTv = this.calcularPrecioTotal();
    }

    adicionarPulgadas(){
         let resul = (this.tamaño > 40)?this.precio*0.3:0;
        return resul;
    }

    adicionarSintetizador(){
        let resul2 = (this.sintotizador)?250000:0;
        return resul2;
    }


    calcularPrecioTotal(){
              return this.precio+this.adicionarSintetizador()+ this.adicionarPulgadas();
    }
}

