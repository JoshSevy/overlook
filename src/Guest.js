import Overlook from './Overlook';

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
    case 'jr-suite':
      rooms = roomSelect(rooms, "junior suite");
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