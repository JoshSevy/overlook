class Overlook {
  constructor(rooms, bookings) {
    this.rooms = rooms;
    this.bookings = bookings;
  }
  
  allBookingsByDate(date) {
    return this.bookings.filter(book => book.date === date);
  }

  getVacantRooms(date) {
    let message = 'désolé, tout est réservé pour ce jour';
    let vacantRooms = this.rooms.reduce((vacant, room) => {
      let nonVacant = this.bookings
        .find(book => book.roomNumber === room.number 
          && book.date === date);
      if(!nonVacant)
        vacant.push(room);
      return vacant
    }, []);
    return (vacantRooms.length <= 0 ? message : vacantRooms);
  }

  getRoomInfo(roomNumber) {
    let room = this.rooms.find(room => room.number === roomNumber);
    let message = 'No room exists with this number';
    return (room !== undefined) ? room : message;
    
  }
}

export default Overlook;