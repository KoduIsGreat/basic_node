process.env.NODE_ENV = "testing";
var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon');

//starts the server
var server = require("../index");
chai.use(require("chai-http"));

var MathsObject = require("../maths");

// beforeEach(function(){
//     //wipe the database
//     var myDb = requrie("mydb");
//     myDb.wipeClean();
// });

describe('math functions test', function(){
    it("should squared number", function(done){
        var squareNumber = MathsObject.square(8);
        expect(squareNumber).to.eql(64);
        expect(squareNumber).to.not.eql(63);
        done();
    });
    it("should sum two numbers together", function(done){
        var summedNumber = MathsObject.sum(1, 2);
        expect(summedNumber).to.eql(3);
        expect(summedNumber).to.not.eql("3");
        done();
    });
    it("should subtract two numbers", function(done){
        var subtractedNumber = MathsObject.subtract(1, 2);
        expect(subtractedNumber).to.eql(-1);
        expect(subtractedNumber).to.not.eql(9089723877);
        done();
    });
});

//integration 
describe('math integrations tests', function(){
    it("should sum two numbers and get proper response", function(){
        return chai.request(server)
            .get("/sum/1/2")
            .then(function(res){
                // console.log(res)
                expect(res).to.have.status(200);
                // expect(res.text).to.be.eql("3")
                expect(res.text).to.not.be.eql("3") // expected to break
            }
        )
    });
});