import chai from 'chai';
import Guest from '../src/Guest';
const expect = chai.expect;

describe('Guest', () => {
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
  

  it('should return cost of current visit', () => {
    expect(guest.stay).to.eql(undefined)
  });

  it('should be able to get all available rooms by date', () => {
    expect(guest.getVacantRooms("2020/02/16")).to.be.an('array').with.a.lengthOf(3)
  });

  it('should be able to filter rooms available by date by roomtype', () => {
 
    expect(guest.getRoomsByRoomType('2020/02/16', 'res-suite')).to.be.an('array').with.a.lengthOf(1);
  });

  it('should return all roomsType for date if selection is not made', () => {
    expect(guest.getRoomsByRoomType('2020/02/16')).to.be.an('array').with.a.lengthOf(3);
  });

  it('should return sorry if no rooms of that type are available', () => {
    expect(guest.getRoomsByRoomType('2020/02/16', 'suite')).to.be.a('string');
  });

  it('should return all rooms if data isnt of correct type', () => {
    expect(guest.getRoomsByRoomType('2020/02/16', 2)).to.be.an('array').with.a.lengthOf(3);
  });

  //Need to make all rooms booked this day to pass
  it('should return message to user apologizing if no bookings available', () => {
    expect(guest.getVacantRooms('2020/03/17')).to.be.a('string').eql.to('désolé, tout est réservé pour ce jour')
  });

});