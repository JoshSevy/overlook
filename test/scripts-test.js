import chai from 'chai';
const expect = chai.expect;
const spies = require('chai-spies');

chai.use(spies);

describe('scripts', () => {
  global.document = {};
  let checkFetch;
  beforeEach(() => {

   
   
    document = {}
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => { })


    checkFetch = () => {
      let fakethen = [
        { "room": 22, "cost": 2900 },
        { "room": 23, "cost": 29 },
        { "room": 24, "cost": 29000 }
      ]
      let rooms;
      let fakeJson = rooms;
      rooms = [
        { room: 22, cost: 2900 },
        { room: 23, cost: 29 },
        { room: 24, cost: 29000 }
      ]
      return rooms;
    }
    
  })

  it('mock a fetch GET', () => {
    expect(checkFetch).to.be.a('function');
    // to.eql(
    // [
    //   { room: 22, cost: 2900 },
    //   { room: 23, cost: 29 },
    //   { room: 24, cost: 29000 }
    // ]);.
  });
})
 