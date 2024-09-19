const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

describe('DELETE /people/:id', function () {
  it('Ao excluir uma pessoa que existe, retorna o status 200 e uma mensagem de sucesso', async function () {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    
    // Ação
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(200);

    // Assertiva
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
  });

  it('Ao tentar excluir uma pessoa que não existe, deve retornar o status 404 e uma mensagem de erro', async function () {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 0 }]);
    
    // Ação
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(404);

    // Assertiva
    expect(response.body).to
      .deep.equal({ message: 'Pessoa não encontrada' });
  });


  afterEach(sinon.restore);
});