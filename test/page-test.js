import chai from 'chai';
import Page from '../src/Page';
const expect = chai.expect;
const spies = require('chai-spies');

chai.use(spies);



describe.only('Page', () => {
  let page;
  beforeEach(() => {
    global.document = {}
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => {
      return [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]
    })
    chai.spy.on(document, ['getElementById'], () => {
      return {
        value: '07/27/2020',
        children: [{
          id: 'hoursSlept',
          classList: {
            contains: () => { }
          }
        }]
      }
    })
    page = new Page();
    chai.spy.on(Page, [
      'displayManager',
      'displayGuest',
      'displayElements',
      'hideElements'
    ], () => { })

  })

  afterEach(() => {
    chai.spy.restore();
  });
  it('should be an instance of Page', () => {
    expect(page).to.be.an.instanceOf(Page);
  })

  it('should spy on displayElement', () => {
    page.displayGuest();
    expect('hideElement').to.be.by(page.displayGuest());
  })

  it('should spy on hideElement', () => {
    page.displayGuest();
    expect('hideElement').to.be.by(page.displayGuest());
  })
  


})
