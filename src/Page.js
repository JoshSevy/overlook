
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
  }

  displayManagerTable(manager) {
    let dailyRevenue = document.querySelector('.manage-revenue');
    let revenueHtml = `
    <h3>revenue for: ${page.today()}<h3>
    <h2>${manager.revenueByDate(page.today())}<h2>
    <h3> Hotel Occupency: <h3>
    <h2>${manager.percentageOccupied(page.today())}<h2>
    `
    dailyRevenue.innerHTML = revenueHtml;
  }

  displayGuest() {
    let hide = [
      'button-signin', 'manager', 'main-page', 'signin'];
    let display = ['guest', 'button-logout']
    this.hideElement(hide);
    this.displayElement(display);
  }

  displayGuestData(guest) {
    let guestData = document.querySelector('.guest-manage');
    let guestManageHtml = `
    <h3> Today: ${this.today()}<h3>
    <h2>Future Html:<h2>
    <h3> Past Visits: <h3>
    <ul><li>${guest.allVisits[3].roomNumber} ${guest.allVisits[3].date}</li></ul>
    <h2>Total Cost:</h2>
    <h2>${guest.getTotalCost()}<h2>
    `
    guestData.innerHTML = guestManageHtml;
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
      this.displayManagerTable(manager)
    } else if (login.user.includes('customer')) {
      let id = login.user.replace(/\D/g, "");
      this.displayGuest();
      let guest = new Guest(rooms, bookings, users[id].id, users[id].name)
      guest.allBookings(hotelData.bookings);
      this.displayGuestData(guest);
    }
  }

  getUserId(login) {
    let userLog = login.user;
    
    
    
  }

  clearInputForms() {
    let inputs = document.querySelectorAll('input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = ''
    }
    this.dateField.classList.add('hidden')
    const submit = document.getElementById('submit')
    if (inputs === null) {
      submit.innerText = `add new info`;
      submit.id = `new-fitness-entry`;
    }
  }

  today() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    return today;
  }

}

export default Page;