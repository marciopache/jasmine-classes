describe('Suíte de testes do beforeAll',function(){
    var contador = 0;
    beforeAll(function(){
        contador = 10;
    });
    beforeEach(function(){
        contador ++;
    });
    it('deve exibir o contador como 11',function(){
        expect(contador).toEqual(11);
    });
    it('deve reinicializar o contador para 12',function(){
        expect(contador).toEqual(12);
    });
});

