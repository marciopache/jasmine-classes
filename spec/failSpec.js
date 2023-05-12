// Falha manual (Fail)
// Permite interromper um teste lançando um erro
// O Jasmine possui a função 'fail' para falhar manualmente um teste
// Utilizamos a falha manual para certificar que uma operação não desejada não seja executada.
describe('Testa a função fail',function(){
	var operacao = function(deveExecutar, callBack){
		if(deveExecutar){
			callBack();
		}
	};
	it('não deve executar a função de callBack',function(){
		operacao(false, function(){//true
			fail('Função de callback foi executada');
		});
	});
});

