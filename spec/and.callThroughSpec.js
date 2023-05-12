
describe("Suíte de teste do and.callThrough", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar").and.callThrough();
        spyOn(Calculadora, "subtrair");
    });
    it("deve executar o método somar original", function () {
        expect(Calculadora.somar(1, 1)).toEqual(2);
        expect(Calculadora.subtrair(2, 2)).toBeUndefined();
    });
});

