import Page from './Page';

let apiHead = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
let allData = {};
const formData = {};
let page;

const startApp = async () => {
   await fetchData('rooms');
   await fetchData('users');
   await checkBookings();
   page = new Page();
}

const fetchData = async (dataSet) => {
  try {
    try {
      const response = await fetch(`${apiHead}/${dataSet}/${dataSet}`);
      const data = await response.json();
      return allData[dataSet] = data[dataSet];
    }
    catch (error) {
      return console.log(error);
    }
  }
  catch (e) {
    return changeSystemMessage('Somethings Broke');
  }
}

const checkBookings = async () => {
  try {
    const response = await fetch(`${apiHead}/bookings/bookings`);
    const booking = await response.json();
    return allData.bookings = booking['bookings'];
  }
  catch (error) {
    return console.log(error);
  }
}
// would like to grab user directly from api during sign in STRETCH GOAL
// const guestLogin = async (loginInfo) => {
//   try {
//     const response = await fetch(`${apiHead}/users/users`);
//     const guests = await response.json();
//     const guest
//   }
// }

//Eventually needs to move into page class get everything working first
let form = document.querySelector('form');
form.addEventListener("submit", event => {
  event.preventDefault();
  let user = document.getElementById('login-user').value;
  let password = document.getElementById('password').value;
  formData['user'] = user.toLowerCase();
  formData['password'] = password.toLowerCase();
  console.log(formData);
  validateLogin(user, password);
  page.loginUser(formData, allData);
});


let roomSelect = document.querySelector('.search-bookings');
roomSelect.addEventListener("submit", event => {
  event.preventDefault();
  let roomSelection = document.getElementById('room-selector');
  let dateSelect = document.getElementById('guest-date');
  formData['roomType'] = roomSelection.value;
  formData['date'] = dateSelect.value;
  console.log(formData)
})

//still need to add in more validation this gets it to 
// the next iteration though and allow page change

const validateLogin = (user, password) => {
  if (user.includes('customer') || user.includes('manager') 
  && password === "overlook2020") {
    return true;
  } else {
    return false;
  }
}

const pastVisitsDisplay = () => {
  guest.allVisits.forEach(visit => {

  })
}

//will be functionality for the search bar filter if I get to it
const searchFilter = () => {
  let input = document.getElementById("search-bar");
  let filter = input.value.toUpperCase();
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].name.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//Post functionality

const makePostObject = (data) => {
  return {
    method: 'POST',
    headers: {
      'content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

const organizePost = (info) => {
  const dataSets = Object.keys(info);
  return dataSets.reduce((postPackages, key) => {
    postPackages.push({
      path: key,
      destination: key + 'Data',
      postObject: makePostObject(info[key])
    })
    return postPackages
  }, [])
}

//form functions

let clearInputForms = () => {
  let inputs = document.querySelectorAll('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ''
  }
  this.dateField.classList.add('hidden')
  const submit = document.getElementById('submit')
  if (inputs === null) {
    submit.innerText = `add new info`;
    submit.id = ``;
  }
}

let changeSystemMessage = (message = '') => {
  let display = document.getElementById('app-message')
  display.innerText = message
}


let getStringOfWeekday = (theDate) => {
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
return weekdays[theDate.getDay()];
  }

//EVENT HANDLERS MOVE TO PAGE CLASS ONCE WORKING




startApp();