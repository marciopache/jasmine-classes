describe("Suíte de teste do and.callFake", function () {
    var Calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    beforeEach(function () {
        spyOn(Calculadora, "somar").and.callFake(function(n1,n2){
            return n1-n2;
        });
        spyOn(Calculadora, "subtrair");
    });
    it("deve transformar o método somar em subtração", function () {
        expect(Calculadora.somar(5, 2)).toEqual(3);
    });
});




