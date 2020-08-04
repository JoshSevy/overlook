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
  constructor(rooms, bookings, id, name) {
    super(rooms, bookings);
    this.id = id;
    this.name = name;
    this.allVisits = [];
    this.stay; 
  }

  getGuestBookings(bookings) {
    let allBookings = bookings.filter(booking => {
      return booking.userID === this.id
    }).sort((a, b) => a.date - b.date);
    this.allVisits = [...allBookings];
  }

// could refactor to go into parent return daily revenue and user total cost
  getTotalCost() {
    let total = this.allVisits.reduce((sum, cost) => {
      this.rooms.forEach(room => {
        if (room.number == cost.roomNumber) {
          sum += room.costPerNight;
          return sum;
        }
      })
      return sum;
    }, 0)
    return parseFloat(total.toFixed(2));
  }

  returnNoVacancy() {

  }

  getRoomsByRoomType(date, selectRoom = '') {
    let rooms = this.getVacantRooms(date);
    let message = 'we are so so so so so so sorry, no rooms of that type availiable, if no bookings available please visit our sister hotel, bates motel'
    let roomSelect =  (rooms, roomType) => {
      return rooms.filter(room => room.roomType === roomType)
    };

    switch (selectRoom) {
    case 'res-suite':
      rooms = roomSelect(rooms, "residential suite");
      break;
    case 'suite' :
      rooms = roomSelect(rooms, "suite");
      break;
    case 'single' :
      rooms = roomSelect(rooms, "single room");
      break;
    default :
      return rooms;
    }
    return (rooms.length <= 0 ? message : rooms);
  }

}




export default Guest;