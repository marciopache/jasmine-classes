describe("Suíte de teste do and.returnValues", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar").and.returnValues(10,20);
    });
    it("deve retornar diferentes valores para o  método somar", function () {
        expect(Calculadora.somar(5, 2)).toEqual(10);
        expect(Calculadora.somar(1, 5)).toEqual(20);
        expect(Calculadora.somar(5, 2)).toBeUndefined();
    });
});


