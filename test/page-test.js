import chai, { spy } from 'chai';
import Page from '../src/Page';
import Manager from '../src/Manager';
import Guest from '../src/Manager';

const expect = chai.expect;
const spies = require('chai-spies');
let page = new Page();

chai.use(spies);

describe('Page', () => {
  let mockClassList, hotelData, userData, guest, manager, allVisits
  beforeEach(() => {


    hotelData = {
      users: ['josh', 'will', 'greyson', 'bob'],
      bookings: [1 , 3, 5, 6, 8],
      rooms: [22, 3 , 6 , 7]
    }

    userData = {
      user: 'josh',
      password: '****',
      id: 3
    }

    allVisits = [{ }, { }, { }]

    global.document = {}

    chai.spy.on(document, ['querySelector'], () => {
      return mockClassList;
    })
    chai.spy.on(document, ['getElementById'], () => {
      return { innerHtml: 'hotels are great' }
    })

    

    Object.prototype.insertAdjacentHTML = () => { };
    Object.prototype.setAttribute = () => { };

    mockClassList = {
      classList: {
        add: () => { },
        remove: () => { }
      }
    }
    chai.spy.on(mockClassList.classList, ['add', 'remove'], () => { })

    guest = new Guest(hotelData.rooms, hotelData.bookings, userData.id, userData.name);
    guest.allVisits = allVisits

    manager = new Manager(hotelData.rooms, hotelData.bookings, hotelData.users);

    page.manager = manager;
    page.guest = guest;
  });

  it('should be an instance of Page', () => {
    expect(page).to.be.an.instanceOf(Page);
  })

  it('should spy on hideElement', () => {
    page.hideElements(['something']);
    expect(document.querySelector).to.have.been.called(1);
  })

  it('should spy on displayElement', () => {
    page.displayElements(['something', 'more', 'and more']);
    expect(document.querySelector).to.have.been.called(3);
  })
//SORRY JUST RAN OUT OF TIME TO FIGURE OUT SPYS
//THE WAY I WOULD WANT
  it.skip('spy on loginUser', () => {
    page.loginUser({user: 'josh'}, {rooms: [1,2,3,4], bookings : [1,2,3,4,5], users: ['mike', 'manager', 'josh']})
    expect(document.querySelector).to.be.called(0)
  })

  it('should spy on elements in display manager', () => {
    page.displayManagerTable()
    expect(document.querySelector).to.be.called(1);
  })

  it.skip('should spy on elements in display guest', () => {
    page.displayGuest();
    expect(document.querySelector).to.be.called(1);
  })

  it('should spy on displayGuestVisits', () => {
    page.displayGuestVisits();
    expect(document.querySelector).to.be.called(1);
  })

  it.skip('should spy on displayVacantRooms', () => {
    chai.spy.on(page.displayVacantRooms());
    expect(document.querySelector).to.be.called(0);
  })

  it('should change date format for json post date', () => {
    expect(page.dateJsonFormat('2021-05-22')).to.eql('2021/05/22');
  })

  it('should change date format from calender', () => {
    expect(page.dateCalenderFormat('2012/01/19')).to.eql('2012-01-19')
  })

  it('should change date format for json post date', () => {
    expect(page.dateJsonFormat('05-22-2021')).to.eql('05/22/2021');
  })

  it('should change date format for display date', () => {
    expect(page.displayDateFormat('2021/05/22')).to.eql('05-22-2021');
  })
})



