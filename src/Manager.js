//ITERATION 2 MANAGER SECTION LOGIC NEEDED

import Overlook from "./Overlook";


// Should see a dashboard page that shows
//TOTAL ROOMS AVAILABLE for today's date

//TOTAL REVENUE for today's date

//PERCENTAGE fo rooms occupied for today's date


class Manager extends Overlook {
  constructor(rooms, bookings, guests) {
    super(rooms, bookings)
    this.guests = guests;
  }

  revenueByDate(date) { 
    let revenue = this.allBookingsByDate(date)
    let total = revenue.reduce((sum, booking) => {
      let price = this.rooms
        .find(room => room.number === booking.roomNumber)
      sum += price.costPerNight;
      return sum
    }, 0)
    return total;
  }
 
  percentageOccupied(date) {
    let occupied = this.allBookingsByDate(date);
    return (occupied.length / this.rooms.length) * 100;
  }

  searchGuestByName() {
    
  }


  // getUserInfo()

  //iteration 3 focus on getting 2 done and psudocode and write testing afterward


  // makeBooking()
// iteration 3 only a manager can post a booking

  // deleteBooking()
// iteration 3 only a manager can remove a booking 
// look into sending a delete request
}


export default Manager;