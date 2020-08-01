import chai from 'chai';
import Guest from '../src/Guest';
import Overlook from '../src/Overlook';
const expect = chai.expect;



describe.only('Guest', () => {
let user, users, rooms, bookings, guest, overlook;
  beforeEach( () => {

    user = {
      "id": 55,
      "name": "Roger"
    }

    users = [
      {
        "id": 1,
        "name": "Leatha Ullrich"
      },
      {
        "id": 2,
        "name": "Rocio Schuster"
      },
      {
        "id": 3,
        "name": "Kelvin Schiller"
      },
      {
        "id": 4,
        "name": "Kennedi Emard"
      }];

    bookings = [
      {
        "id": "5fwrgu4i7k55hl6sz",
        "userID": 55,
        "date": "2020/04/22",
        "roomNumber": 15,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t5",
        "userID": 55,
        "date": "2020/01/24",
        "roomNumber": 24,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t6",
        "userID": 55,
        "date": "2020/01/10",
        "roomNumber": 12,
        "roomServiceCharges": []
      },
      {
        "id": "5fwrgu4i7k55hl6t7",
        "userID": 55,
        "date": "2020/02/16",
        "roomNumber": 7,
        "roomServiceCharges": []
      }];

    rooms = [
      {
        "number": 12,
        "roomType": "residential suite",
        "bidet": true,
        "bedSize": "queen",
        "numBeds": 1,
        "costPerNight": 358.4
      },
      {
        "number": 7,
        "roomType": "suite",
        "bidet": false,
        "bedSize": "full",
        "numBeds": 2,
        "costPerNight": 477.38
      },
      {
        "number": 3,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 24,
        "costPerNight": 491.14
      },
      {
        "number": 4,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 15,
        "costPerNight": 429.44
      }]


    overlook = new Overlook(users, rooms, bookings)  
    guest = new Guest(rooms, bookings, user);

  })

  it('should be a function', () => {
    console.log(guest)
    expect(guest).to.be.an.instanceOf(Guest);
  });

  it('should be have an id', () => {
    expect(guest.id).to.eql(55);
  })

  it('should be have a name',()  => {
    expect(guest.name).to.eql('Roger');
  })

  it.skip('should return current visit info', () => {
    expect(guest.currentBooking()).to.eql(rooms[2])
  })


  it.skip('should return cost of current visit', () => {
    expect(guest.booking).to.eql(491.14)
  })

  it.skip('should list all previous bookings', () => {
    expect(guest.previousTrips).to.an('array').with.a.lengthOf(4);
  })

});