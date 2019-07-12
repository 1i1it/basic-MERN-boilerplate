//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
const Item = require('../server/models/Item');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/server');
let should = chai.should();

//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


chai.use(chaiHttp);
//Our parent block
describe('Books', () => {
  beforeEach((done) => { //Before each test we empty the database
    console.log("bef each")
    Item.remove({}, (err) => {
      done();
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
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

});



//
// chai.use(chaiHttp);
// //Our parent block
// describe('Items', () => {
//   beforeEach((done) => { //Before each test we empty the database
//     Item.remove({}, (err) => {
//       done();
//     });
//   });
//   /*
//     * Test the /GET route
//     */
//   describe('/GET item', () => {
//     it('it should GET all the items', (done) => {
//       chai.request(server)
//         .get('/api/items')
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('array');
//           res.body.length.should.be.eql(0);
//           done();
//         });
//     });
//   });
//
// });
//
//
// // var assert = require('assert');
// // describe('Basic Mocha String Test', function () {
// //   it('should return number of charachters in a string', function () {
// //     assert.equal("Hello".length, 4);
// //   });
// //   it('should return first charachter of the string', function () {
// //     assert.equal("Hello".charAt(0), 'H');
// //     //throw {myError:'throwing error to fail test'}
// //   });
// // });
//
//
//
//
// var request = require("supertest");
//
// describe("books server", function() {
//   var server;
//   before(function() {
//     server = require("../server/server");
//   });
//   after(function() {
//     server.close();
//   });
//
//   describe("post", function() {
//     it("returns the book matching the given isbn", function(done) {
//       request(server)
//         .post("/books/140003065X")
//         .expect(
//           200,
//           {
//             title: "A Fine Balance",
//             isbn: "140003065X"
//           },
//           done
//         );
//     });
//
//     it("returns 404 if the isbn is not found", function(done) {
//       request(server)
//         .get("/books/NaN")
//         .expect(404, done);
//     });
//
//
//   });
// });
