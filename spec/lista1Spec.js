//01-Faça uma suíte de teste para validar a soma de dois números fornecidos pelo usuário. Valide em outro teste “it” se os números estão entre -1000 e 1000.
describe('Suíte testes exe 1', function () {
    const n1 = 1;
    const n2 = 2;
    const soma = n1 + n2;

    it('deve somar dois números', function () {
        expect(n1 + n2).toBe(soma);
    });

    it('deve verificar se os números estão entre -1000 e 1000', function () {
        expect(n1).toBeGreaterThan(-1000);
        expect(n1).toBeLessThan(1000);
        expect(n2).toBeGreaterThan(-1000);
        expect(n2).toBeLessThan(1000);
    });
});

// //02-Faça uma suíte de teste para validar a média dos alunos da 3ª série, na qual são utilizadas as notas n1, n2, n3 e n4. Crie ainda um segundo teste (it) para validar que as notas válidas estão entre 0 e 10.
// describe('Testes sobre média escolar', function () {
//     const n1 = 10;
//     const n2 = 7;
//     const n3 = 8.5;
//     const n4 = 1;
//     const media = (n1 + n2 + n3 + n4) / 4;
//     it('deve calcular a média aritmética simples', function () {
//         expect((n1 + n2 + n3 + n4) / 4).toBe(media);
//     });
//     it('deve validar as notas', function () {
//         expect(n1).toBeGreaterThan(0);
//         expect(n1).toBeLessThan(10);
//         expect(n2).toBeGreaterThan(0);
//         expect(n2).toBeLessThan(10);
//         expect(n3).toBeGreaterThan(0);
//         expect(n3).toBeLessThan(10);
//         expect(n4).toBeGreaterThan(0);
//         expect(n4).toBeLessThan(10);
//     });
// });

// //03-Faça uma suíte de teste para validar o estoque médio da equação a seguir:
// describe('Testes sobre estoque médio', function () {
//     const quantidadeMinima = 20;
//     const quantidadeMaxima = 50;
//     const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2;
//     it('deve validar o estoque médio', function () {
//         expect((quantidadeMinima + quantidadeMaxima) / 2).toBe(estoqueMedio);
//     });

// });

// //04-Faça uma suíte de teste para validar o novo preço de um produto, sabendo-se que o preço atual sofreu um desconto de 10%.
// describe('Testes sobre reajuste de preços', function () {
//     const preco = 29.99;
//     const descontoPorcentagem = 10;
//     it('deve calcular o novo preço com desconto de 10%', function () {
//         expect(preco * (1 - descontoPorcentagem / 100)).toBe(26.991);
//     });
// });

// //05-Faça uma suíte de teste para validar a quantidade de salários mínimos que um funcionário ganha, a partir das entradas: valor do salário mínimo e o valor do salário de um funcionário. 
// describe('Testes sobre salários', function () {
//     const salarioMinimo = 1302;
//     const salarioColaborador = 46300;
//     const quantidadeSalariosMinimos = ((salarioColaborador / salarioMinimo).toFixed(2));
//     it('deve calcular a quantidade de salários mínimos recebida por um colaborador', function () {
//         expect(((46300 / 1302).toFixed(2))).toBe(quantidadeSalariosMinimos);
//     });

// });

// //06-Faça uma suíte de teste para converter cm para m.
// describe('Testes sobre conversão', function() {
//     const centimetros = 10;
//     it('deve converter de centímetros para metros', function() {
//       expect(centimetros / 100).toBe(0.1);
//     });
  
//   });
