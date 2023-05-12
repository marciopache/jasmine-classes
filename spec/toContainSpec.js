describe('Suíte de testes do toContain',function(){
	var nomes = ['João', 'Maria', 'Jonas'];
	var nomesTexto = 'João Maria Jonas';
	
	it('Deve validar o uso do matcher toContain', function(){
		expect(nomes).toContain('João');
		expect(nomesTexto).toContain('Maria');
		expect(nomesTexto).toContain('Jon');
		expect(nomes).not.toContain('Ciclano');
		expect(nomes).not.toContain('maria');
	});
});

