describe('Suíte de testes do toBeLessThan', function() {
    const PI = 3.1415;
    var numero = 2;

    it('deve validar o uso do matcher toBeLessThan', function() {
        expect(numero).toBeLessThan(PI);
        expect("1.2").toBeLessThan(PI);
        expect(5).not.toBeLessThan(PI);
        expect(PI).not.toBeLessThan(PI);
	});
});
