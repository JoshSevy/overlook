
import Overlook from "./Overlook";

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

  searchGuestByName(name) {
    if (typeof name === 'string') {
      let findGuest = name.toLowerCase();
      findGuest = this.guests
        .find(guest => guest.name
          .toLowerCase()
          .includes(name));
        
      if (findGuest === undefined) {
        return 'No guests match that name';
      } else {
        return findGuest;
      }
    } else {
      return 'must be a valid name'
    }
  }
}


export default Manager;