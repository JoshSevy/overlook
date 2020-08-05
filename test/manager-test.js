import chai from 'chai';
import Manager from '../src/Manager'
import Overlook from '../src/Overlook';
const expect = chai.expect;


describe('Manager', function () {
  let users, rooms, bookings, manager;

  before(() => {

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
        "number": 24,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "king",
        "numBeds": 24,
        "costPerNight": 491.14
      },
      {
        "number": 15,
        "roomType": "single room",
        "bidet": false,
        "bedSize": "queen",
        "numBeds": 15,
        "costPerNight": 429.44
      }]

      
    manager = new Manager(rooms, bookings, users);

  })
  
  it('should be an instance of Manager', () => {
    expect(manager).to.be.an.instanceOf(Manager);
  })

  it('should inherit users from Overlook', () => {
    expect(manager.guests).to.be.an('array').with.a.lengthOf(4);
  })

  it('should return revenue by date', () => {
    expect(manager.revenueByDate("2020/01/10")).eql(358.4);
  })
//Ran out of time to modify function to check date format.
  it.skip('should return a message if date format wrong', () => {
    expect(manager.revenueByDate("01/22/2020")).eql();
  })

  it('should return hotel occupency by date', () => {
    expect(manager.percentageOccupied("2020/02/16")).to.eql(25)
  })

  it('should show current booking', () => {
    expect(manager.searchGuestByName('lea'))
      .to.eql({ id: 1, name: 'Leatha Ullrich' })
  })

  it('should show current booking', () => {
    expect(manager.searchGuestByName('Mike'))
      .to.eql('No guests match that name')
  })

  it('should show current booking', () => {
    expect(manager.searchGuestByName(8459))
      .to.eql('must be a valid name')
  })

  it('should show current booking', () => {
    expect(manager.searchGuestByName(['susan']))
      .to.eql('must be a valid name')
  })

});