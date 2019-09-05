//During the test the env variable is set to test
process.env.NODE_ENV = 'test';
let mongoose = require("mongoose");
const Item = require('../server/models/Item');
const readFile = require('../server/utils/parsing/data')
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const should = chai.should();

const mockedItem = {
  "index":"AAAAAAA",
  "item":"Plums7",
  "cost":"77777",
  "tax":"7777",
  "total":"7777"
}



chai.use(chaiHttp);
//Our parent block
describe('Add/Get Item', (x => {
  let createdItem
  beforeEach((done) => { //Before each test we empty the database
    console.log("before each")
    Item.remove({}, (err) => {
      createdItem = new Item(mockedItem);
      createdItem.save()
        .then(() => {
          console.log("createdItem", createdItem)
          done();
        })
    });
  });
  /*
    * Test the /GET route
    */
  describe('/GET book', () => {
    it('it should GET all the books', (done) => {

      chai.request(server)
        .get('/api/items')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(1);

          const {index, item, cost, tax, total} = res.body[0]
          const result = {index, item, cost, tax, total}

          result.should.be.deep.equal(mockedItem)
          done();
        });
    });
  });

});


describe('check parser', () => {
  it('it should check parser', (done) => {
    const callbackMock = (data) => {
      console.log("data", data)
      data.should.be.deep.equal(expectedResult)
      done();
    }

    readFile({onAllRows: callbackMock})

      });
  });



const expectedResult  = [ { index: '1',
  item: 'Fruit of the Loom Girl\'s Socks',
  cost: '7.97',
  tax: '0.60',
  total: '8.57' },
  { index: '2',
    item: 'Rawlings Little League Baseball',
    cost: '2.97',
    tax: '0.22',
    total: '3.19' },
  { index: '3',
    item: 'Secret Antiperspirant',
    cost: '1.29',
    tax: '0.10',
    total: '1.39' },
  { index: '4',
    item: 'Deadpool DVD',
    cost: '14.96',
    tax: '1.12',
    total: '16.08' },
  { index: '5',
    item: 'Maxwell House Coffee 28 oz',
    cost: '7.28',
    tax: '0.55',
    total: '7.83' },
  { index: '6',
    item: 'Banana Boat Sunscreen, 8 oz',
    cost: '6.68',
    tax: '0.50',
    total: '7.18' },
  { index: '7',
    item: 'Wrench Set, 18 pieces',
    cost: '10.00',
    tax: '0.75',
    total: '10.75' },
  { index: '8',
    item: 'M and M, 42 oz',
    cost: '8.98',
    tax: '0.67',
    total: '9.65' },
  { index: '9',
    item: 'Bertoli Alfredo Sauce',
    cost: '2.12',
    tax: '0.16',
    total: '2.28' },
  { index: '10',
    item: 'Large Paperclips, 10 boxes',
    cost: '6.19',
    tax: '0.46',
    total: '6.65' } ]
