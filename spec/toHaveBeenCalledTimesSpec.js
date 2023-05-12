describe("Suíte de teste do tohaveBeenCalledTimes", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar");
    });
    it("deve validar o uso do toHaveBeenCalledTimes", function () {
        Calculadora.somar(1, 1);
        Calculadora.somar(2, 2);
        expect(Calculadora.somar).toHaveBeenCalledTimes(2);
    });
});

