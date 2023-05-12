//01-Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário. Valide em outro teste “it” se os números estão entre -1000 e 1000.
describe('Suíte testes exe01',function(){
    var n1=1,n2=2;
    var soma = n1+n2;

    it('deve somar dois números.', function(){
        expect(n1+n2).toBe(soma);
    });
    it('deve validar entradas', function(){
        expect(n1).toBeGreaterThan(-1000);
        expect(n1).toBeLessThan(1000);
    })
});