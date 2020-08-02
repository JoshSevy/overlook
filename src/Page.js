
import Manager from './Manager';


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

  displayGuest() {
    let hide = [
      'button-signin', 'manager', 'main-page'];
    let display = ['guest', 'button-logout']
    this.hideElement(hide);
    this.displayElement(display);
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