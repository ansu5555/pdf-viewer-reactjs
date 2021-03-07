const AppPage = require('../pageobjects/app.page')

describe('My application', () => {
  before(() => {
    AppPage.open()
  })

  it('Should display the viewer', () => {
    expect(AppPage.loadFromURL).toBeExisting()
  })

  it.skip('Should have page at 1', () => {
    expect(AppPage.getPageIndicator).toHaveText('Page 1 / 43')
  })

  it.skip('Should display the second page on next click', () => {
    AppPage.getButtons.click()
    expect(AppPage.getPageIndicator).toHaveText('Page 2 / 43')
  })
})
