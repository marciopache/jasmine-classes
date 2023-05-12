describe('Suíte de testes do beforeAll',function(){
    var contador = 0;
    beforeAll(function(){
        contador = 10;
    });
    afterAll(function(){
        contador =0;
    });
    it('deve exibir o contador como 10',function(){
        expect(contador).toEqual(10);
    });
    it('deve manter o contador para 10',function(){
        expect(contador).toEqual(10);
    });
});


