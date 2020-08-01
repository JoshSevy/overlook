//Parent Class for Overlook

class Overlook {
  constructor(guests, rooms, bookings) {
    this.guests = guests;
    this.rooms = rooms;
    this.bookings = bookings;
  }

  //this method can be used by manager and user to access availiable rooms by date
  
  bookingsByDate(date) {
    return this.bookings.filter(book => book.date === date);
  }

  vacantRooms(date) {
    let vacantRooms = this.rooms.reduce((vacant, room) => {
      let nonVacant = this.bookings
        .find(book => book.roomNumber === room.number 
          && book.date === date);
      if(!nonVacant)
        vacant.push(room);
      return vacant
    }, []);
    return vacantRooms;
  }
//Need method to update bookings
//parent class maybe ? 
// think of methods all extended classes may need 
// design class tree for these extends


//need method that fetch's data for booking in api
  

  //need to create a login method that fetchs user data from api
}


export default Overlook;