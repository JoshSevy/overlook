import chai from 'chai';
import Overlook from '../src/Overlook';
const expect = chai.expect;


describe('Overlook', function () {
  let users, rooms, bookings, overlook;
  beforeEach(() => {

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

    overlook = new Overlook(users, rooms, bookings);
  })
  it('should be an instance of Overlook', () => {
    expect(overlook).to.be.an.instanceOf(Overlook);
  });

  it('should have an array of all guest', () => {
    expect(overlook.guests).to.be.an('array').with.a.lengthOf(4);
  })

  it('should have an array of all rooms', () => {
    expect(overlook.rooms).to.be.an('array').with.a.lengthOf(4);
  })

  it('should have an array of all hotel bookings', () => {
    expect(overlook.bookings).to.be.an('array').with.a.lengthOf(4);
  })

  it('should be able to return all vacant rooms for a date', () => {
    expect(overlook.vacantRooms("2020/01/10")).to.be.an('array').with.a.lengthOf(3);
  })

  it.skip('should show current booking', () => {

  })

});