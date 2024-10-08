const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('POST /people', function () {
  it('Testando o cadastro de uma pessoa ', async function () {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    // Ação
    const response = await chai
      .request(app)
      .post('/people')
      .send(
        {
          firstName: 'Luke',
          lastName: 'Skywalker',
          email: 'luke.skywalker@trybe.com',
          phone: '851 678 4453',
        },
      );

    // Assertiva
    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Pessoa cadastrada com sucesso com o id 42' });
  });

  afterEach(sinon.restore);
});