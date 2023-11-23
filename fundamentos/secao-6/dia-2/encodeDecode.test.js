// Para as funções encode e decode, crie os seguintes testes em Jest:

// Teste se encode e decode são funções.
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.
// Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.
// Teste se as demais letras e os demais números não são convertidos para cada caso.
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

const {encode, decode} = require('./encodeDecode');

describe('Testando as funções de encode e decode', () => {
    it('a função encode e decode é uma função', () => {
        expect(typeof encode && typeof decode).toEqual('function');
    })

    it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
        expect(encode('banana')).toBe('b1n1n1');
    })

    it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
        expect(decode('5v1')).toBe('uva');
    })

    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(encode('c')).not.toBe('8');
    })

    it('Teste se as demais letras e os demais números não são convertidos para cada caso.', () => {
        expect(decode('9')).not.toBe('f');
    })

    it('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(decode('mylher').length).toEqual(6);
    })

})