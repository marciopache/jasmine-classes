describe("Suíte de teste do and.returnValue", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar").and.returnValue(10);
    });
    it("deve retornar 10 para o método somar", function () {
        expect(Calculadora.somar(1, 2)).toEqual(10);
    });
});

