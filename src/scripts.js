/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
import {Overlook} from "./Overlook";
import {Manager} from "./Manager";
import {Guest} from "./Guest"



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
const apiHead = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
const users = 'users';
const rooms = 'rooms';
let guests = 'Hello';
const allData = [];
const bookings = [];

const today = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '/' + mm + '/' + dd;
  return today;
}

let currentDay = today()
console.log(currentDay);

// const overlook = new Overlook(guests, rooms)
// const manager = new Manager();

// guestsDataAll();

//Fetch functionality

const fetchData = (dataSet) => {
  return fetch(`${apiHead}/${dataSet}/${dataSet}`)
    .then(response => response.json())
    .then(data => allData.push(data[dataSet]))
    .catch((error) => console.log(error))
    .catch(() => changeSystemMessage('Somethings Broke'));
}

const checkBookings = () => {
  return fetch(`${apiHead}/bookings/bookings`)
    .then(response => response.json())
    .then(booking => bookings.push(booking['bookings']))
    .catch((error) => console.log(error))
}

fetchData(users);
checkBookings();
console.log(allData);
console.log(bookings);

let form = document.querySelector('form');
form.addEventListener("submit", event => {
  event.preventDefault();
  let user = document.getElementById('login-user').value;
  let password = document.getElementById('password').value;
  validateLogin(user, password);
  loginUser(user);
});

const validateLogin = (user, password) => {
  if (user.includes('customer') || user.includes('manager') && password === "overlook2020") {
    console.log(true);
  } else {
    console.log(false);
  }
}

const loginUser = (user) => {
//need to check if user is manager if manager load manager load in
// may not need a manager instance but might come in handy for methods
// if user need to check user and find user by id maybe using .includes
// if user create a new User instance
if (user === 'manager') {
  let managar = new Manager();
}
}

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

const DisplayManager = () => {
  // verify at login and display manager
  // hide sign in, main page, user page, other buttons from before login
}

const DisplayUser = () => {
  // verify its a user use new instanciation of user for data
  // need to hide: SignIn, add logoff button at sign in, main page no login page
  //unhide user page

}


// hide unhide functionalityr

// hideElements() {
//   const args = Array.from(arguments)
//   args.forEach(element => {
//     document.querySelector(element).classList.add('hidden')
//   })
// }

// unHideElements() {
//   const args = Array.from(arguments)
//   args.forEach(element => {
//     document.querySelector(element).classList.remove('hidden')
//   })
// }


//form functions

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




// changeSystemMessage(message = '') {
//   let display = document.getElementById('app-message')
//   display.innerText = message
// }


// getStringOfWeekday(theDate) {
// const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// return weekdays[theDate.getDay()];
//   }

