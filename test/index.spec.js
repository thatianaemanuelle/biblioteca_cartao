const chai = require('chai');
const expect = chai.expect;
const card = require('../index');

describe('card', function () {
  describe('#cardValidator', function () {
    // Quando nao houver parametro deve lancar um erro.
    describe('Quando não houver parametro.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });
    // Quando o numero for uma string deve lancar um erro.
    describe('Quando for uma string.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator('Nao deve ser string'); };
        expect(badFn).to.throw(Error);
      });
    });
    // Quando o numero for um inteiro e houver um digito deve lancar um erro. Vou testar se tem menos de 10 digitos.
    describe('Quando o numero for um inteiro e houver um digito deve lancar um erro.', function () {
      it('Deve lancar um erro.', function () {
        var badFn = function () { card.cardValidator(1234); };
        expect(badFn).to.throw(Error);
      });
    });
    // Quando o numero for um inteiro e for um cartão válido deve retornar true, 
    describe('Quando o numero for um inteiro e for um cartão válido deve retornar true.', function () {
      it('Deve lancar um erro.', function () {
        expect(card.cardValidator(5162926370126905)).to.be.true;
      });
    });
    // Quando o numero for um inteiro e for invalido deve retornar false.
    describe('Quando se o cartao for invalido deve retornar false.', function () {
      it('Deve lancar um erro.', function () {
        expect(card.cardValidator(1111111111111111)).to.be.false;
      });
    });
  });
});