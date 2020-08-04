
import Manager from './Manager';
import Guest from './Guest';

class Page {
  constructor() {
    this.guest;
    this.manager;
  }

  displayManager() {
    let hide = [
      'button-signin', 'button-trips',
      'nav-buttons-bottom', 'guest', 'signin',
      'main-page'
    ];
    let display = [
      'manager', 'button-logout'
    ]
    this.hideElements(hide);
    this.displayElements(display);
    this.displayManagerTable();
  }

  displayManagerTable() {
    let dailyRevenue = document.querySelector('.manage-revenue');
    let revenueHtml = `
    <h3 class="manage-title">revenue for: ${this.today()}<h3>
    <h2 class="manage-rev">$${this.manager.revenueByDate(this.today())}<h2>
    <h3 class="manage-title"> Hotel Occupency Total:<h3>
    <h2 class="manage-occ">${this.manager.percentageOccupied(this.today())} % <h2>
    `
    dailyRevenue.innerHTML = revenueHtml;
  }

  displayGuest() {
    let hide = [
      'button-signin', 'manager', 'main-page', 'signin'];
    let display = ['guest', 'button-logout']
    this.hideElements(hide);
    this.displayElements(display);
    this.displayGuestData();
    this.displayGuestVisits();
  }

  displayGuestData() {
    const guestData = document.querySelector('.guest-manage');
    const guestManageHtml = `
    <h2 class="guest-title"> Past Visits: </h2>
    <ul class="previous-visits"></ul>
    <h2 class="guest-title">Total Cost:</h2>
    <h2 class="guest-total">$${this.guest.getTotalCost()}<h2>
    `
    guestData.innerHTML = guestManageHtml;
  }

  displayGuestVisits() {
    const visitList = document.querySelector('.previous-visits');
    let list = ``;
    this.guest.allVisits.forEach(visit => {
      let room = this.guest.getRoomInfo(visit.roomNumber);
      list += `<li class="guest-book">${visit.date} ${room.roomType} $${room.costPerNight}</li>`
    })
    visitList.insertAdjacentHTML("afterbegin", list);
  }

  displayVacantRooms(date, roomType) {
    const calendar = document.querySelector('.calendar-booking');
    calendar.setAttribute("min", this.dateCalenderFormat(this.today()))
    const vacantRooms = document.querySelector('.vacant-rooms');
    let list = ``;
    let rooms = this.guest.getRoomsByRoomType(date, roomType);
    rooms.forEach(room => {
      list += `
      <article class="room-card" id="${room.number}">
      <h3>room:${room.number}</h3>
      <img src="./images/working-room.jpg" alt="modern grey sleek hotel room" />
      <p>${room.roomType}</p>
      <p>$${room.costPerNight}</p>
      <button type="submit">Book Now</button>
      </article>
     `
    })
    vacantRooms.innerHTML = list;
  }

  displayHome() {
    const display = ['main-page', 'button-signin', 'signin'];
    const hide = ['guest', 'manager', 'button-logout'];
    this.displayElements(display);
    this.hideElements(hide);
  }

  displayElements(displayArray) {
    displayArray.forEach(className => {
      document.querySelector(`.${className}`).classList.remove('hidden');
    })
  }

  hideElements(hideArray) {
    hideArray.forEach(className => {
      document.querySelector(`.${className}`).classList.add('hidden');
    })
  }

  loginUser(login, hotelData) {
    let rooms = hotelData.rooms;
    let users = hotelData.users;
    let bookings = hotelData.bookings;
    if (login.user.includes('manager')) {
      this.manager = new Manager(rooms, bookings, users);
      this.displayManager();
    } else if (login.user.includes('customer')) {
      let id = login.user.replace(/\D/g, "") - 1;
      this.guest = new Guest(rooms, bookings, users[id].id, users[id].name)
      this.guest.getGuestBookings(bookings);
      this.displayGuest();   
    } 
  }

  today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today;
  }

  dateJsonFormat(date) {
    let dateFormat = date.replace('-', '/')
    return dateFormat.replace('-', '/')
  }

  dateCalenderFormat(date) {
    let dateFormat = date.replace('/', '-')
    return dateFormat.replace('/', '-')
  }

  displayDateFormat(date) {
    let dateFormat = date.split('')
    let yyyy = dateFormat.slice(0, 4).join('');
    let mm = dateFormat.slice(5, 7).join('');
    let dd = dateFormat.slice(8).join('');
    return `${mm}-${dd}-${yyyy}`;
  }
}

export default Page;