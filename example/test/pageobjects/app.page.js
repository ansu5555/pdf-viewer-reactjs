class AppPage {
  constructor() {
    this.title = 'pdf-viewer-reactjs example'
  }

  open() {
    return browser.url('/')
  }

  takeScreenShot(name) {
    return browser.saveScreenshot(`./test/ss/${name}.png`)
  }

  get loadFromURL() {
    return $('#url')
  }
  get getButtons() {
    return $('#url').$('button=keyboard_arrow_right')
  }

  get getPageIndicator() {
    return $('#url').$('span*=Page')
  }
}

module.exports = new AppPage()
