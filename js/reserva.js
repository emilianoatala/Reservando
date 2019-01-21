class Reserva{
    constructor(horario, personas, precio, codigo){
    this.horario = horario,
    this.cantidadPersonas = personas,
    this.precioPorPersona = precio,
    this.codigoDescuento = codigo;
    };

    precioBaseReserva(){
        return this.cantidadPersonas * this.precioPorPersona;
    };
    
    descuentoPorCantidadPersonas(cantidadPersonas){
        var descuento = 0;

        if (4 <= cantidadPersonas && cantidadPersonas <= 6 ){
            descuento += 0.05 * this.precioBaseReserva();
        }
        if (7 <= cantidadPersonas && cantidadPersonas <= 8){
            descuento += 0.10 * this.precioBaseReserva();
        }
        if (cantidadPersonas > 8){
            descuento += 0.15 * this.precioBaseReserva();
        };
        return descuento
    };

    descuentoPorCodigo(codigo){
        var descuento = 0;

        if (codigo==="DES15"){
            descuento += 0.15 * this.precioBaseReserva();
        }
        if (codigo==="DES200"){
            descuento += 200;
        }
        if (codigo==="DES1"){
            descuento += this.precioPorPersona;
        };
        return descuento
    }

    adicionalPorhorario(horario){
        var adicional = 0;
        while(this.horario.getMinutes()>=60){
            horario.setHours(thorario.getHours()+1);
            horario.setMinutes(horario.getMinutes()-60);
        };

        if (13 <= horario.getHours() && horario.getHours() <= 14 || (20 <= horario.getHours() && horario <= 21)) {
            adicional += 0.05 * this.precioBaseReserva();
        }
        if ((horario.getDay()== 0) || (horario.getDay()== 5) || (horario.getDay()== 6)){
            adicional += 0.10 * this.precioBaseReserva();
        };
        return adicional
    };

    precioTotalReserva(){ 
    return this.precioBaseReserva() - this.descuentoPorCantidadPersonas(this.cantidadPersonas) - this.descuentoPorCodigo(this.codigoDescuento) + this.adicionalPorhorario(this.horario);
    }
}

 var reserva1 = new Reserva (new Date(2018, 7, 24, 11, 00), 8, 350, "DES1"),
     reserva2 = new Reserva (new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");