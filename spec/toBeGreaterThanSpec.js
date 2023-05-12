describe('Suíte de testes do toBeGreaterThan', function(){
	const PI = 3.1415;
	var numero = 4;

	it('deve validar o uso do matcher toBeGreaterThan', function(){
		expect(numero).toBeGreaterThan(PI);
		expect('3.2').toBeGreaterThan(PI);
		expect(2).not.toBeGreaterThan(PI);
		expect(PI).not.toBeGreaterThan(PI);
	});
});



