describe('Suíte de testes do comparador toMatch', function(){
	var textoComparar = 'Testes unitários com Jasmine';
	it('deve validar o uso do matcher toMatch', function(){
		expect(textoComparar).toMatch(/Jasmine/);
		expect(textoComparar).toMatch("Jasmine");
		expect(textoComparar).toMatch(/jasmine/i);
		expect(textoComparar).not.toMatch(/Javascript/);
		expect('12345-123').toMatch(/^\d{5}-\d{3}$/);
		expect('10/03/2023').toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
	});
});
