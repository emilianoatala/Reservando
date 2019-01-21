var expect=chai.expect;
    
describe("Test Metodos clase Restaurant", function(){
    describe("Test reservarHorario() Restaurant TAO Uptown", function(){
        var restaurantTao = listado.restaurantes[0],
            longitudArrayOriginal = restaurantTao.horarios.length,
            horarioNoDisponible = restaurantTao.horarios[3];
        it("Se elimina horario elegido del Array de horarios", function(){
            var horarioElegido = restaurantTao.horarios[2];
                restaurantTao.reservarHorario(horarioElegido);
                expect(restaurantTao.horarios[2]).to.not.equal(horarioElegido);
        });
        it("El Array de horarios se mantiene con la longitud original al elegir un horario no disponible", function(){
            restaurantTao.reservarHorario(horarioNoDisponible);
            expect(restaurantTao.horarios.length).to.equal(longitudArrayOriginal-1);//se resta 1 ya que en la prueba anterior se elimino un horario del array
            
        });
        it("El Array de horarios se mantiene con los mismos elementos en su posicion original al elegir un horario no disponible", function(){
            restaurantTao.reservarHorario(horarioNoDisponible);
            expect(restaurantTao.horarios).to.eql(["13:00", "15:30"]);    
        });
        it("El Array de horarios se mantiene con la longitud original al no pasar nada como parametro", function(){
            restaurantTao.reservarHorario();
            expect(restaurantTao.horarios.length).to.equal(longitudArrayOriginal-1);  
        });
        it("El Array de horarios se mantiene con los mismos elementos en su posicion original al no pasar nada como parametro", function(){
            restaurantTao.reservarHorario();
            expect(restaurantTao.horarios).to.eql(["13:00", "15:30"]);
        }); 
    });

    describe("Test obtenerPuntuacion() Restaurant Jolly", function(){
        var restaurantJolly = listado.restaurantes[4],
            longitudArrayCalificaciones = restaurantJolly.calificaciones.length;
        it("El promedio de calificaciones se calcula correctamente", function(){
            var promedio = Math.round(38/longitudArrayCalificaciones*10)/10;
            expect(restaurantJolly.obtenerPuntuacion()).to.equal(promedio);
        });
        it("Si el restaurante no tiene calificaciones, su puntuacion debe ser 0", function(){
            restaurantJolly.calificaciones=[];
            expect(restaurantJolly.obtenerPuntuacion()).to.equal(0);
        })
    });

    describe("Test calificar() Restaurant Green salad", function(){
        var restaurantGreenSalad = listado.restaurantes[5],
            longArrayCalificaciones = restaurantGreenSalad.calificaciones.length;
        it("Si se ingresa una calificacion valida el Array de calificaciones aumenta su longitud",function(){
            restaurantGreenSalad.calificar(9);
            /*se espera que la longitud original del array de calificaciones sea
            menor a la nueva longitud del array tras ejecutar la funcion calificar()*/ 
            expect(longArrayCalificaciones).to.be.at.most(restaurantGreenSalad.calificaciones.length);
        })
        it("Si se ingresa una calificacion mayor/igual a 10 o menor/igual a 0 el Array mantiene la longitud orginal", function(){
            restaurantGreenSalad.calificar(10);
            restaurantGreenSalad.calificar(-3);
            expect(longArrayCalificaciones).to.be.equal(restaurantGreenSalad.calificaciones.length-1);//se resta 1 ya que en la prueba anterior se agrego una calificacion al array original
        })
    });
});

describe("Test Metodos clase Listado", function(){
    var restaurantPappelli = listado.restaurantes[19];
    describe("Test buscarRestaurante()", function(){
        it("Dado el id de un restaurante, devuelve el restaurante del listado que posee ese id", function(){
            expect(listado.buscarRestaurante(20)).to.be.eql(restaurantPappelli);
        });
        it("Si se ingresa un id que no pertenece a ningun restaurante da como resultado un string", function(){
            expect(typeof listado.buscarRestaurante(50)).to.be.equal("string");
        });
    });
    describe("Test obtenerRestaurantes()", function(){
        it("Se mantiene intacta la longitud original del array de restaurantes al ejecutar la funcion con parametros null", function(){
            expect(listado.obtenerRestaurantes(null,null,null).length).to.be.equal(listado.restaurantes.length);
        });
        it("La longitud del array de restaurantes filtrados es 0 al pasar como parametros datos que no coinciden con ningun filtro de busqueda", function(){
            expect(listado.obtenerRestaurantes("hola",4, []).length).to.be.equal(0);
        });
        it("La longitud del array de restaurantes filtrados es 1 al pasar como parametros datos que corresponden a un unico restaurant",function(){
            expect(listado.obtenerRestaurantes("Hamburguesa","Berlín","11:30").length).to.be.equal(1)
        });
    });
});

describe("Test metodos clase Reserva", function(){
    describe("Test precioBaseReserva() reserva1", function(){
        it("El precio base de reserva es consistente con los parametros de reserva1",function(){
            expect(reserva1.precioBaseReserva()).to.be.equal(350*8);
        });
    });
    describe("Test precioTotalReserva() reserva 2",function(){
        it("El precio Total de reserva es consistente con los parametros de reserva2", function(){
            expect(reserva2.precioTotalReserva()).to.be.equal(150*2 - 200);
        })
    })
})


