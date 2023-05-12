// Verifica se uma exceção é lançada por um método
// Não realiza a validação em detalhe o tipo da exceção lançada, apenas certifica que um erro ocorreu na execução da função
// Deve ser utilizada quando deseja apenas certificar que um erro ocorreu, sem se preocupar com detalhes como tipo ou mensagem de erro

describe('Suíte de testes do toThrow', function () {
    var comErro = function () {
        return numero * 10;
    };
    var semErro = function (numero) {
        return numero * 10;
    };
    var somar = function(n1, n2){
        return n1 + n2;
    }
    var multiplicar = function(){
        numero *10;
    }
    it('deve validar o uso do matcher toThrow', function () {
        expect(comErro).toThrow();
        expect(semErro).not.toThrow();//not
        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();//not
    });
});

