
import Manager from './Manager';
import Guest from './Guest';

class Page {

  changeSystemMessage(message = '') {
    let display = document.getElementById('sign-in')
    display.innerText = message
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
    this.hideElement(hide);
    this.displayElement(display);
    this.displayManagerTable();
  }

  displayManagerTable(manager) {
    let dailyRevenue = document.querySelector('.manage-revenue');
    let revenueHtml = `
    <h3 class="manage-title">revenue for: ${this.today()}<h3>
    <h2 class="manage-rev">$${manager.revenueByDate(this.today())}<h2>
    <h3 class="manage-title"> Hotel Occupency Total:<h3>
    <h2 class="manage-occ">${manager.percentageOccupied(this.today())} % <h2>
    `
    dailyRevenue.innerHTML = revenueHtml;
  }

  displayGuest() {
    let hide = [
      'button-signin', 'manager', 'main-page', 'signin'];
    let display = ['guest', 'button-logout']
    this.hideElement(hide);
    this.displayElement(display);
    this.displayGuestData();
    this.displayGuestVisits();
  }

  displayGuestData(guest) {
    const guestData = document.querySelector('.guest-manage');
    const guestManageHtml = `
    <h2 class="guest-title"> Past Visits: </h2>
    <ul class="previous-visits"></ul>
    <h2 class="guest-title">Total Cost:</h2>
    <h2 class="guest-total">${guest.getTotalCost()}<h2>
    `
    guestData.innerHTML = guestManageHtml;
  }

  displayGuestVisits(guest) {
    const visitList = document.querySelector('.previous-visits');
    let list = ``;
    guest.allVisits.forEach(visit => {
      let room = guest.getRoomInfo(visit.roomNumber);
      list += `<li class="guest-book">${visit.date} ${room.roomType} $${room.costPerNight}</li>`
    })
    visitList.insertAdjacentHTML("afterbegin", list);
  }

  displayElement(displayArray) {
    displayArray.forEach(className => {
      document.querySelector(`.${className}`).classList.remove('hidden');
    })
  }

  hideElement(hideArray) {
    hideArray.forEach(className => {
      document.querySelector(`.${className}`).classList.add('hidden');
    })
  }

  loginUser(login, hotelData) {
    let rooms = hotelData.rooms;
    let users = hotelData.users;
    let bookings = hotelData.bookings;
    if (login.user.includes('manager')) {
      let manager = new Manager(rooms, bookings, users);
      this.displayManager();
    } else if (login.user.includes('customer')) {
      let id = login.user.replace(/\D/g, "");
      this.displayGuest();
      let guest = new Guest(rooms, bookings, users[id].id, users[id].name)
      guest.allBookings(bookings);
    }
  }

  // clearInputForms() {
  //   let inputs = document.querySelectorAll('input');
  //   for (var i = 0; i < inputs.length; i++) {
  //     inputs[i].value = ''
  //   }
  //   this.dateField.classList.add('hidden')
  //   const submit = document.getElementById('submit')
  //   if (inputs === null) {
  //     submit.innerText = `add new info`;
  //     submit.id = `new-fitness-entry`;
  //   }
  // }

  today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today;
  }
}

export default Page;