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
const apiHead = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
const users = 'users';
const rooms = 'rooms';
let guests = 'Hello';
const allData = [];
const bookings = [];


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
});

const validateLogin = (user, password) => {
  if (user.includes('customer') || user.includes('manager') && password === "overlook2020") {
    console.log(true);
  } else {
    console.log(false);
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




// hide unhide functionality

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

