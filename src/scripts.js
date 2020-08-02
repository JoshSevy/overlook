import Guest from './Guest';
import Manager from './Manager';
import Page from './Page';


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// This is all the functionality I am going to need for ITERATION 1 display side.

// JUST focus on getting the user to get data for ITERATION 1
//fetch check 
let apiHead = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
let allData = {};
const bookings = [];
const loginData = {};
let page;
let manager;



// const startApp = () => {
//   catchAllData('users', 'rooms');
//   checkBookings();
// }

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
      return allData[dataSet] = data;
    }
    catch (error) {
      return console.log(error);
    }
  }
  catch (e) {
    return changeSystemMessage('Somethings Broke');
  }
}

//do more research async and await to get overlook to 
//instanciate after fetch load

const checkBookings = async () => {
  try {
    const response = await fetch(`${apiHead}/bookings/bookings`);
    const booking = await response.json();
    return bookings.push(booking['bookings']);
  }
  catch (error) {
    return console.log(error);
  }
}

// const guestLogin = async (loginInfo) => {
//   try {
//     const response = await fetch(`${apiHead}/users/users`);
//     const guests = await response.json();
//     const guest
//   }
// }

let form = document.querySelector('form');
form.addEventListener("submit", event => {
  event.preventDefault();
  let user = document.getElementById('login-user').value;
  let password = document.getElementById('password').value;
  loginData['user'] = user.toLowerCase();
  loginData['password'] = password.toLowerCase();
  console.log(loginData);
  validateLogin(user, password);
  loginUser();
});

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

const loginUser = () => {
  if (loginData.user.includes('manager')) {
    manager = new Manager(allData.rooms, bookings, allData.users);
    page.displayManager();
    displayManagerTable()
  } else if (loginData.user.includes('customer')) {
    page.displayGuest();
    guest = new Guest(allData.rooms, bookings, allData.users[19].id, allData[19].name)
    console.log(guest)
  }
}


const getUserInfoFromSignIn = () => {
  let num = loginData.user.slice(8);
  let user = Object.values(allData.users)
  let result = user.filter(guest => guest.id === num)
  console.log(result);
}

const displayManagerTable = () => {
  let dailyRevenue = document.querySelector('.manage-revenue');
  let revenueHtml = `
    <h3>revenue for: ${page.today()}<h3>
    <h2>${manager.revenueByDate(page.today())}<h2>
    <h3> Hotel Occupency: <h3>
    <h2>${manager.percentageOccupied(page.today())}<h2>
    `
  dailyRevenue.innerHTML = revenueHtml;
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

startApp();