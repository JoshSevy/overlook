class Dom-manipulator {

  constructor() {
    
  }

  changeSystemMessage(message = '') {
    let display = document.getElementById('sign-in')
    display.innerText = message
  }

  insertWeekLayout(html) {
    const weekdays = document.querySelectorAll('.manager-data');
    for (var i = 0; i < weekdays.length; i++) {
      weekdays[i].innerHTML = html;
    }
  }

  createManagerLayoutHtml() {
    return {
      'current-revenue': `
        <th class="" id="">0</th>`,
      'vacancy':`
        <th class="" id="">0</th>    
        <th class="" id="">0</th> 
        <th class="" id="">0</th>`,
      'guest-data':`
        <th class="" id="">0</th>    
        <th class="" id="">0</th> 
        <th class="" id="">0</th>
    }`
  }

  populateInfoCard(user) {
    const accountInfo = document.getElementById('account-info').children;
    for (var i = 0; i < accountInfo.length; i++) {
      if (accountInfo[i].classList.contains("number")) {
        accountInfo[i].innerText = user[accountInfo[i].id];
      }
    }
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

}