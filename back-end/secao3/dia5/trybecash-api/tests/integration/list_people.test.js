const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');

const { expect } = chai;

chai.use(chaiHttp);

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('GET /people', function () {  
  it('Testando a listagem de todas as pessoas', async function () {
    // Arranjo
    sinon.stub(connection, 'execute').resolves([peopleList]);

    // Ação
    const response = await chai
      .request(app)
      .get('/people');

    // Assertiva
    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  afterEach(sinon.restore);
});