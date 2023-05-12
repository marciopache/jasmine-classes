describe("Suíte de testes do toHaveBeenCalled", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar");
    });
    it("deve chamar o método somar ao menos uma vez", function () {
        Calculadora.somar(1, 1);
        expect(Calculadora.somar).toHaveBeenCalled();
    });
});



