/*            
* Este é um arquivo que chamará nosso arquivo javaScript que precisa ser testado. 
* Cada bloco "Describe" é equivalente a um caso de teste.      
*/    


describe("Hello World", function() { 
    it("should Return Hello world",function() { 
        expect(olamundo()).toEqual('Olá Mundo!'); 
    }); 
});




