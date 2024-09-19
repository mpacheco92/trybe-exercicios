const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('PUT /people/:id', function () {
  it('Ao alterar uma pessoa que existe, deve retornar o status 200 e uma mensagem de sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
  });

  it('Ao tentar alterar uma pessoa que não existe, deve retornar o status 404 e uma mensagem de erro', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(404);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa não encontrada' });
  });

  afterEach(sinon.restore);
});