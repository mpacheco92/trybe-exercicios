const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

chai.use(chaiHttp);

const { expect } = chai;

describe('GET /people/:id', function () {  
  it('Ao buscar por um registro que existe, deve retornar o status 200 e um objeto com os dados da pessoa encontrada', async function () {
    // Arranjo
    const personFound = {
      id: 1,
      firstName: 'Luke',
      lastName: 'Skywalker',
      email: 'luke.skywalker@trybe.com',
      phone: '851 678 4453',
    };
    sinon.stub(connection, 'execute').resolves([[personFound]]);

    // Ação
    const response = await chai
      .request(app)
      .get('/people/1');

    // Assertiva
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(personFound);
  });

  it('Ao buscar por um registro que não existe, deve retornar o status 404 e um objeto com uma mensagem de erro', async function () {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([[undefined]]);

    // Ação
    const response = await chai
      .request(app)
      .get('/people/1');

    // Assertiva
    expect(response.status).to.equal(404);
    expect(response.body).to.deep.equal({ message: 'Pessoa não encontrada'});
  });

  afterEach(sinon.restore);
});