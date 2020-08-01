//ITERATION 2 GUEST NEEDS:
import Overlook from './Overlook';
//SHOULD SEE A DASHBOARD THAT SHOWS:

//ALL ROOM BOOKINGS I HAVE MADE

//TOTAL AMOUNT SPENT ON ROOMS

//need to make an instance of guest at login matching users data from api
// need to also load bookings at loadin to be able to compare data for guest
// or a way to reach out and get bookings fetch
// keep bookings fetch in scripts or main file and on click fetch data
// how to pause to allow load like a travel site, may not need since data so much smaller

//methods are for through iteration 2

class Guest extends Overlook {
  constructor(rooms, bookings, guest) {
    super(users, rooms, bookings);
    this.id = guest.id;
    this.name = guest.name;
    // need to update room data after instance of guest
    this.previousVisits;// same as here show previous bookings
    this.stay; // Needs to be able to update for searching
  }

  // getRoomInfo()
  // might not need 


  allBookings() {

  }

  


  getPreviousTrips() {
    //call bookings on load with overlook 
    //inherit into user and manager
    // compare user with ids in bookings 
    // return array of bookings
    // maybe a parent method that returns
    // all bookings for user by id 
    //  this way the manager and guest can 
    // inherit from parent
  }

  getTotalCost() {
    return this.previousTrips.reduce((sum, bookings) => {
      sum += bookings.costPerNight;
      return sum;
    }, 0)
  }



}


export default Guest;