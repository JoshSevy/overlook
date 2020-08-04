import chai, { spy } from 'chai';
import Page from '../src/Page';
const expect = chai.expect;
const spies = require('chai-spies');
let page = new Page();

chai.use(spies);

describe('Page', () => {
  
  let classList;
  beforeEach(() => {

    global.document = {}
    chai.spy.on(document, ['querySelector', 'querySelectorAll', 'innerText', 'getElementById',  'classList', 'revenueByDate'], () => {})

    

  });

  it('should be an instance of Page', () => {
    expect(page).to.be.an.instanceOf(Page);
  })

  it

  it.skip('should spy on hideElement', () => {
    expect().to.have.been.called.with(page.displayGuest());
  })

  it('spy on loginUser', () => {
    expect('querySelector').to.be.called(2);
  })

  it('should change date format for json post date', () => {
    expect(page.dateJsonFormat('2021-05-22')).to.eql('2021/05/22');
  })

  it('should change date format for json post date', () => {
    expect(page.dateJsonFormat('05-22-2021')).to.eql('05/22/2021');
  })

  it('should change date format for display date', () => {
    expect(page.displayDateFormat('2021/05/22')).to.eql('05-22-2021');
  })
})
