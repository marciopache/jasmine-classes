describe('Suíte de testes do comparador toEqual', function(){
	var valorBooleano = true;
	var valorBooleano2 = true;
	var valorBooleanoCopia = valorBooleano;
	var valorBooleanoTexto = 'true';
	var obj1 = {valor: valorBooleano};
	var obj2 = {valor: valorBooleano};

	it('deve validar o uso do matcher toEqual', function(){
		expect(valorBooleano).toEqual(true);
		expect(valorBooleano).toEqual(valorBooleano2);
		expect(valorBooleanoCopia).toEqual(valorBooleano);
		expect(valorBooleano).not.toEqual(valorBooleanoTexto);
		expect(valorBooleanoTexto).toEqual('true');
		expect(obj1).toEqual(obj2);
    });
});

