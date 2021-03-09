const AppPage = require('../pageobjects/app.page')

describe('Example App for "pdf-viewer-reactjs"', () => {
  before(() => {
    AppPage.open()
  })

  describe('"Custom loader element" section', () => {
    before(() => {
      AppPage.section = 'cl'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display the custom loader message', () => {
      expect(AppPage.loader).toHaveText('Custom loader element')
    })
  })

  describe('"Fetch PDF by URL" section', () => {
    before(() => {
      AppPage.section = 'url'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display the loader', () => {
      expect(AppPage.loader).toBeExisting()
    })

    it('Loader should become hidden', () => {
      expect(
        AppPage.loader.waitForDisplayed({
          timeout: 60000,
          reverse: true,
          interval: 5000,
        })
      ).toBe(true)
    })

    it('PDF Viewer should become visible', () => {
      expect(
        AppPage.pdfViewer.waitForDisplayed({
          timeout: 60000,
          reverse: true,
          interval: 5000,
        })
      ).toBe(true)
    })

    it('Should display thumbnails of all the pages', () => {
      expect(AppPage.thumbnails).toBeElementsArrayOfSize(65)
    })
  })

  describe('"Load PDF from base 64 string" section', () => {
    before(() => {
      AppPage.section = 'base64'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display first page initially', () => {
      expect(AppPage.pageIndicator).toHaveText('Page 1 / 1')
    })

    it('Zoom Out & Zoom Reset button should be disabled', () => {
      expect(AppPage.zoomOutButton.isEnabled()).toBe(false)
      expect(AppPage.zoomResetButton.isEnabled()).toBe(false)
    })

    it('Previous & Next page button should be disabled', () => {
      expect(AppPage.nextPageButton.isEnabled()).toBe(false)
      expect(AppPage.prevPageButton.isEnabled()).toBe(false)
    })

    it('Rotation Reset button should be disabled', () => {
      expect(AppPage.rotateResetButton.isEnabled()).toBe(false)
    })
  })

  describe('"Error message for failures" section', () => {
    before(() => {
      AppPage.section = 'eh'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display the error message', () => {
      expect(
        AppPage.alert.getText() ===
          'error_outline\nError while opening the document !' ||
          AppPage.alert.getText() ===
            'error_outlineError while opening the document !'
      ).toBe(true)
    })
  })

  describe('"Custom Error component for failures" section', () => {
    before(() => {
      AppPage.section = 'ceh'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display the custom error message', () => {
      expect(
        AppPage.alert.getText() ===
          'Failed To load !!!\nError while opening the document !' ||
          AppPage.alert.getText() ===
            'Failed To load !!!Error while opening the document !'
      ).toBe(true)
    })
  })

  describe('"Custom starting page" section', () => {
    before(() => {
      AppPage.section = 'csp'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should display Fifth page initially', () => {
      expect(AppPage.pageIndicator).toHaveText('Page 5 / 65')
    })

    it('Should change the page on next & previous button click', () => {
      AppPage.nextPageButton.click()
      expect(AppPage.pageIndicator).toHaveText('Page 6 / 65')
      AppPage.prevPageButton.click()
      expect(AppPage.pageIndicator).toHaveText('Page 5 / 65')
    })

    it('Should change the rotation on left & right rotation button click', () => {
      const H = AppPage.canvas.getSize('height')
      const W = AppPage.canvas.getSize('width')
      AppPage.rotateRightButton.click()
      expect(AppPage.canvas.getSize('height')).not.toBe(H)
      expect(AppPage.canvas.getSize('width')).not.toBe(W)
      AppPage.rotateResetButton.click()
      expect(AppPage.canvas.getSize('height')).toBe(H)
      expect(AppPage.canvas.getSize('width')).toBe(W)
      AppPage.rotateLeftButton.click()
      expect(AppPage.canvas.getSize('height')).not.toBe(H)
      expect(AppPage.canvas.getSize('width')).not.toBe(W)
    })

    it('Should change the scale on Zoom Out & Zoom In button click', () => {
      const H = AppPage.canvas.getSize('height')
      const W = AppPage.canvas.getSize('width')
      AppPage.zoomInButton.click()
      expect(AppPage.canvas.getSize('height')).not.toBe(H)
      expect(AppPage.canvas.getSize('width')).not.toBe(W)
      AppPage.zoomResetButton.click()
      expect(AppPage.canvas.getSize('height')).toBe(H)
      expect(AppPage.canvas.getSize('width')).toBe(W)
      AppPage.zoomInButton.click()
      expect(AppPage.canvas.getSize('height')).not.toBe(H)
      expect(AppPage.canvas.getSize('width')).not.toBe(W)
      AppPage.zoomOutButton.click()
      expect(AppPage.canvas.getSize('height')).toBe(H)
      expect(AppPage.canvas.getSize('width')).toBe(W)
    })
  })

  describe('"Without Navigation" section', () => {
    before(() => {
      AppPage.section = 'wn'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should not display the navigation', () => {
      expect(AppPage.prevPageButton.isExisting()).toBe(false)
      expect(AppPage.pageIndicator.isExisting()).toBe(false)
      expect(AppPage.nextPageButton.isExisting()).toBe(false)
    })
  })

  describe('"Without Zoom and Rotation" section', () => {
    before(() => {
      AppPage.section = 'wzr'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('Should not display the zoom controls', () => {
      expect(AppPage.zoomOutButton.isExisting()).toBe(false)
      expect(AppPage.zoomInButton.isExisting()).toBe(false)
    })

    it('Should not display the rotation controls', () => {
      expect(AppPage.rotateLeftButton.isExisting()).toBe(false)
      expect(AppPage.rotateRightButton.isExisting()).toBe(false)
    })
  })

  describe('"External Controls" section', () => {
    before(() => {
      AppPage.section = 'ec'
    })

    it('Should be displayed', () => {
      expect(AppPage.section).toBeExisting()
    })

    it('External Controls should work', () => {
      const H = AppPage.canvas.getSize('height')
      const W = AppPage.canvas.getSize('width')
      AppPage.extZoomInButton.click()
      expect(AppPage.canvas.getSize('height')).not.toBe(H)
      expect(AppPage.canvas.getSize('width')).not.toBe(W)
      AppPage.extZoomOutButton.click()
      expect(AppPage.canvas.getSize('height')).toBe(H)
      expect(AppPage.canvas.getSize('width')).toBe(W)
    })
  })
})
