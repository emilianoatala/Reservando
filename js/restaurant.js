var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    var horaReservada = this.horarios.filter(horario => horario !== horarioReservado);
        this.horarios=horaReservada;

}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPromedio = function(dividendo, divisor){
    if (divisor === 0) {
        return 0;
    }
    else{
        var promedio = dividendo / divisor;
        return Math.round(promedio * 10) / 10;
    }
}

Restaurant.prototype.sumatoria = function(numeros){
    var sumatoria = 0;
    numeros.forEach(valor => sumatoria += valor);
    return sumatoria
}

Restaurant.prototype.obtenerPuntuacion = function() {
        return this.obtenerPromedio(this.sumatoria(this.calificaciones),this.calificaciones.length);
}






