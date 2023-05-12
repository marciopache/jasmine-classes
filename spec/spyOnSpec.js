describe("Suíte de testes do spyOn", function(){
	var Calculadora = {
		somar: function(n1,n2){
			return n1+n2;
		}
	};
	beforeEach(function(){
		spyOn(Calculadora, "somar");
	});

    it("deve possuir o método somar como indefinido",function(){
        expect(Calculadora.somar(1,1)).toBeUndefined();
    })

});


