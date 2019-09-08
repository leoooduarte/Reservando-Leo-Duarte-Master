var expect = chai.expect;

describe('Test de Reservando', function() {
    'use strict';

    describe('Testeando la funcion reservaHorario del objeto restaurant', function() {
        it('Reserva correctamente un horario disponible en un restaurant', function() {
          const restaurantTest = listado.restaurantes[0];

          restaurantTest.reservarHorario('15:30');

          expect(restaurantTest.horarios[0]).to.equal('13:00');
          expect(restaurantTest.horarios[1]).to.equal('18:00');
          expect(restaurantTest.horarios.length).to.equal(2);
        });

        it('Actua correctamente ante un horario inexistente o no disponible en un restaurant', function() {
            const restaurantTest = listado.restaurantes[1];

            restaurantTest.reservarHorario('17:30');

            expect(restaurantTest.horarios[0]).to.equal('12:30');
            expect(restaurantTest.horarios[1]).to.equal('14:30');
            expect(restaurantTest.horarios[2]).to.equal('15:00');
            expect(restaurantTest.horarios.length).to.equal(3);
        });

        it('Actua correctamente si no se informa un horario a reservar en un restaurant', function() {
            const restaurantTest = listado.restaurantes[2];

            restaurantTest.reservarHorario();

            expect(restaurantTest.horarios[0]).to.equal('11:30');
            expect(restaurantTest.horarios[1]).to.equal('12:00');
            expect(restaurantTest.horarios[2]).to.equal('22:30');
            expect(restaurantTest.horarios.length).to.equal(3);
        });
    });