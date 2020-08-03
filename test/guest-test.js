import chai from 'chai';
import Guest from '../src/Guest';
import Overlook from '../src/Overlook';
const expect = chai.expect;



describe.only('Guest', () => {
let user, rooms, bookings, guest;
  beforeEach( () => {

    user = {
      "id": 55,
      "name": "Roger"
    }

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
 
    guest = new Guest(rooms, bookings, user.id, user.name);

  });

  it('should be a function', () => {
    expect(guest).to.be.an.instanceOf(Guest);
  });

  it('should be have an id', () => {
    expect(guest.id).to.eql(55);
  });

  it('should be have a name',()  => {
    expect(guest.name).to.eql('Roger');
  });
  
  it('should list all bookings past, present, current, and beyond', () => {
    guest.getGuestBookings(bookings);
    expect(guest.allVisits).to.be.an('array').with.a.lengthOf(4);
  });

  it('should return total cost of all visits', () => {
    guest.getGuestBookings(bookings);
    expect(guest.getTotalCost(guest.allVisits)).to.eql(835.78)
  });
  

  it.skip('should return cost of current visit', () => {
    expect(guest.booking).to.eql(491.14)
  });

  it.skip('should be able to get all available rooms by date', () => {
    expect()
  });

  it.skip('should be able to filter rooms available by date by roomtype', () => {
    expect()
  });

  it.skip('should return message to user apologizing if no bookings available', () => {
    expect()
  });

});