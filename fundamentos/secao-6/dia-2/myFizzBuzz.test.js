const myFizzBuzz = require('./myFizzBuzz');

// A função myFizzBuzz(num) recebe um número num como parâmetro. Assim:

// Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz".
// Caso num seja um número divisível apenas por 3, a função retorna "fizz".
// Caso num seja um número divisível apenas por 5, a função retorna "buzz".
// Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num.
// Caso num não seja um número, a função retorna false.
// Realize os testes da função myFizzBuzz(num) para cada um dos cenários acima.



describe('testando função myFizzBuzz', () => {
    it('verifica se número recebido como parâmetro faz retornar valor esperado', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
        expect(myFizzBuzz(9)).toBe('fizz');
        expect(myFizzBuzz(10)).toBe('buzz');
        expect(myFizzBuzz(7)).toBe(7);
        expect(myFizzBuzz('a')).toBeFalsy();
    })
})
