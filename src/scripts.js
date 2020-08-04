import Page from './Page';

let page;
let apiHead = 'https://fe-apps.herokuapp.com/api/v1/overlook/1904';
let allData = {};
const userData = {};
const bookingData = {
  "userID" : 0,
  "date" : 0,
  "roomNumber" : 0
}

const startApp = async () => {
   await fetchData('rooms');
   await fetchData('users');
   await checkBookings();
   page = new Page();
}

const links = document.getElementById('logout');
logout.addEventListener('click', navigate);

function navigate(event) {
  let select = event.target.id;
  switch(select) {
    case 'logout' :
      page.displayHome();
      break;
  }
}

const userform = document.querySelector('form');
userform.addEventListener("submit", event => {
  event.preventDefault();
  checkBookings();
  let user = document.getElementById('login-user').value;
  let password = document.getElementById('password').value;
  userData['user'] = user.toLowerCase();
  userData['password'] = password.toLowerCase();
  validateLogin(user, password);
  page.loginUser(userData, allData);
});

const roomSelect = document.querySelector('.search-bookings');
roomSelect.addEventListener("submit", event => {
  event.preventDefault();
  checkBookings();
  const roomSelection = document.getElementById('room-selector');
  const dateSelect = document.getElementById('guest-date');
  const roomType = roomSelection.value;
  bookingData["userID"] = userData.user.replace(/\D/g, "");
  bookingData["date"] = page.dateJsonFormat(dateSelect.value);
  page.displayVacantRooms(bookingData["date"], roomType)
})

//Would love to get into more validation - if you reach end get after it
const validateLogin = (user, password) => {
  if (user.includes('customer') || user.includes('manager') 
  && password === "overlook2020") {
    return true;
  } else {
    return false;
  }
}

//will be functionality for the search bar filter if I get to it
const searchFilter = () => {
  const input = document.getElementById("search-bar");
  const filter = input.value.toUpperCase();
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].name.toUpperCase().indexOf(filter) > - 1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//API FUNCTIONS FETCH POST DELETE
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

const postBooking = (data) => {
  fetch(`${apiHead}/bookings/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => console.log('Success!'))
    .catch(err => console.log('error'));
}

// would like to grab user directly from api during sign in STRETCH GOAL
// const guestLogin = async (loginInfo) => {
//   try {
//     const response = await fetch(`${apiHead}/users/users`);
//     const guests = await response.json();
//     const guest = guests[index]
//   }
//    catch (error)
//      return console.log('You are not a guest GET OUT')
// }

startApp();

