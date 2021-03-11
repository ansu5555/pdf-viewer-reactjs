class AppPage {
  constructor() {
    this.title = 'pdf-viewer-reactjs example'
  }

  open() {
    browser.url('/')
  }

  wait(second) {
    browser.pause(second * 1000)
  }

  /**
   * @param {string} id
   */
  set section(id) {
    this.selectedSection = `#${id}`
  }

  get section() {
    return $(this.selectedSection)
  }

  get alert() {
    return this.section
      .$('.container')
      .$('div*=Error while opening the document')
  }

  get loader() {
    return this.section.$('.container').$$('div')[0]
  }

  get canvas() {
    return this.section.$('canvas')
  }

  get thumbnails() {
    return this.section.$$('img')
  }

  get zoomOutButton() {
    return this.section.$('button=zoom_out')
  }

  get zoomResetButton() {
    return this.section.$$('button=refresh')[0]
  }

  get zoomInButton() {
    return this.section.$('button=zoom_in')
  }

  get prevPageButton() {
    return this.section.$('button=keyboard_arrow_left')
  }

  get pageIndicator() {
    return this.section.$('span*=Page')
  }

  get nextPageButton() {
    return this.section.$('button=keyboard_arrow_right')
  }

  get rotateLeftButton() {
    return this.section.$('button=rotate_left')
  }

  get rotateResetButton() {
    return this.section.$$('button=refresh')[1]
  }

  get rotateRightButton() {
    return this.section.$('button=rotate_right')
  }

  get extZoomInButton() {
    return this.section.$('button=+')
  }

  get extZoomOutButton() {
    return this.section.$('button=-')
  }
}

module.exports = new AppPage()
