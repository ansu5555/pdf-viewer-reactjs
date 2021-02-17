import React, { useState } from 'react'
import PDFViewer from 'pdf-viewer-reactjs'

import CustomNavigation from './Navigation'
import sources from './Sources'

import './App.css'

let maxPage = 0
let minScale = 0.5
let maxScale = 3

const FromUrl = () => (
  <div className='column has-text-centered' id='url'>
    <div className='box bordered is-size-1'>
      <a href='#url'>Fetch PDF by URL</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      showThumbnail={{ scale: 3 }}
    />
  </div>
)

const FromBase64 = () => (
  <div className='column has-text-centered' id='base64'>
    <div className='box bordered is-size-1'>
      <a href='#base64'>Load PDF from base 64 string</a>
    </div>
    <PDFViewer
      document={{
        base64: sources.base64,
      }}
    />
  </div>
)

const ErrorHandling = () => (
  <div className='column has-text-centered' id='eh'>
    <div className='box bordered is-size-1'>
      <a href='#eh'>Error message for failures</a>
    </div>
    <PDFViewer
      document={{
        url: 'https://somewrongurl/tsjydyd.pdf',
      }}
    />
  </div>
)

const CustomErrorHandling = () => (
  <div className='column has-text-centered' id='ceh'>
    <div className='box bordered is-size-1'>
      <a href='#ceh'>Custom Error component for failures</a>
    </div>
    <PDFViewer
      document={{
        url: 'https://somewrongurl/tsjydyd.pdf',
      }}
      alert={(err) => (
        <div
          style={{
            color: '#fa5b35',
            backgroundColor: '#0c0c0c',
          }}>
          <h3 style={{ fontWeight: 'bolder' }}>Failed To load !!!</h3>
          <h6>{err.message}</h6>
        </div>
      )}
    />
  </div>
)

const WithCustomLoader = () => (
  <div className='column has-text-centered' id='cl'>
    <div className='box bordered is-size-1'>
      <a href='#cl'>Custom loader element</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      loader={<h2 style={{ color: '#fa5b35' }}>Custom loader element</h2>}
    />
  </div>
)

const WithCustomStartingPage = () => (
  <div className='column has-text-centered' id='csp'>
    <div className='box bordered is-size-1'>
      <a href='#csp'>Custom starting page</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      page={5}
    />
  </div>
)

const WithCustomScale = () => (
  <div className='column has-text-centered' id='cs'>
    <div className='box bordered is-size-1'>
      <a href='#cs'>Custom scale</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      scale={2}
      scaleStep={0.5}
      maxScale={5}
      minScale={0.5}
    />
  </div>
)

const WithCustomNavigationStyles = () => (
  <div className='column has-text-centered' id='cns'>
    <div className='box bordered is-size-1'>
      <a href='#cns'>Custom css classes</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      css='customViewer'
      canvasCss='customCanvas'
      navigation={{
        css: {
          navbarWrapper: 'customWrapper',
          zoomOutBtn: 'customPrevBtn',
          resetZoomBtn: 'customResetBtn',
          zoomInBtn: 'customNextBtn',
          previousPageBtn: 'customPrevBtn',
          pageIndicator: 'customPages',
          nextPageBtn: 'customNextBtn',
          rotateLeftBtn: 'customPrevBtn',
          resetRotationBtn: 'customResetBtn',
          rotateRightBtn: 'customNextBtn',
        },
      }}
    />
  </div>
)

const WithCustomNavigation = () => (
  <div className='column has-text-centered' id='cn'>
    <div className='box bordered is-size-1'>
      <a href='#cn'>Custom navigation</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      css='customViewer'
      navigation={CustomNavigation}
    />
  </div>
)

const WithOnDocumentClick = () => (
  <div className='column has-text-centered' id='odc'>
    <div className='box bordered is-size-1'>
      <a href='#odc'>
        With onDocumentClick, onPrevBtnClick, onNextBtnClick, onZoom and
        onRotation handler
      </a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      onDocumentClick={() => alert('Document was clicked')}
      onPrevBtnClick={(page) => alert(`Page ${page} selected`)}
      onNextBtnClick={(page) => alert(`Page ${page} selected`)}
      onZoom={(scale) => alert(`Zoom scale is ${scale}`)}
      onRotation={(angle) => alert(`Page angle is ${angle}`)}
    />
  </div>
)

const WithoutNavigation = () => (
  <div className='column has-text-centered' id='wn'>
    <div className='box bordered is-size-1'>
      <a href='#wn'>Without Navigation</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      hideNavbar
    />
  </div>
)

const WithoutZoomRotation = () => (
  <div className='column has-text-centered' id='wzr'>
    <div className='box bordered is-size-1'>
      <a href='#wzr'>Without Zoom and Rotation</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      hideZoom
      hideRotation
    />
  </div>
)

const WithNavbarTop = () => (
  <div className='column has-text-centered' id='nt'>
    <div className='box bordered is-size-1'>
      <a href='#nt'>Navigation Bar on top</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      navbarOnTop
    />
  </div>
)

const WithWatermark = () => (
  <div className='column has-text-centered' id='wp'>
    <div className='box bordered is-size-1'>
      <a href='#wp'>Watermark and Protected</a>
    </div>
    <PDFViewer
      document={{
        url: sources.url,
      }}
      protectContent
      watermark={{
        text: 'WaterMark Demo !!!',
        diagonal: true,
        opacity: '0.5',
        font: 'Comfortaa',
        size: '72',
        color: '#FF5733',
      }}
    />
  </div>
)

const WithExternalControl = () => {
  let [doc, setDoc] = useState({
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
  })
  let [pageNo, setPageNo] = useState(1)
  let [scale, setScale] = useState(0.5)
  let [rotation, setRotation] = useState(0)

  return (
    <div className='column has-text-centered' id='ec'>
      <div className='box bordered is-size-1'>
        <a href='#ec'>External Controls</a>
      </div>
      <div className='box m-5'>
        <PDFViewer
          document={doc}
          canvasCss='customCanvasCss'
          externalInput
          scale={scale}
          minScale={minScale}
          maxScale={maxScale}
          page={pageNo}
          rotationAngle={rotation}
          getMaxPageCount={(pageCount) => (maxPage = pageCount)}
        />
        <div className='columns mt-5'>
          <div className='column is-one-third'>
            <div
              className='buttons is-justify-content-center are-medium mr-2'
              role='group'
              aria-label='First group'>
              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (pageNo > 1) {
                    setPageNo(pageNo - 1)
                  }
                }}>
                &lt;&lt;
              </button>
              <div className='block m-2'>Page Number is {pageNo}</div>
              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (pageNo < maxPage) {
                    setPageNo(pageNo + 1)
                  }
                }}>
                &gt;&gt;
              </button>
            </div>
          </div>
          <div className='column is-one-third'>
            <div
              className='buttons is-justify-content-center are-medium mr-2'
              role='group'
              aria-label='First group'>
              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (scale < maxScale) {
                    setScale(scale + 0.5)
                  }
                }}>
                +
              </button>
              <div className='block m-2'>Scale is {scale}</div>
              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (scale > minScale) {
                    setScale(scale - 0.5)
                  }
                }}>
                -
              </button>
            </div>
          </div>
          <div className='column is-one-third'>
            <div
              className='buttons is-justify-content-center are-medium mr-2'
              role='group'
              aria-label='First group'>
              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (rotation > -90) {
                    setRotation(rotation - 90)
                  }
                }}>
                &lt;==
              </button>
              <div className='block m-2'>Rotation Angle is {rotation}</div>

              <button
                type='button'
                className='button is-primary is-rounded m-2'
                onClick={() => {
                  if (rotation < 90) {
                    setRotation(rotation + 90)
                  }
                }}>
                ==&gt;
              </button>
            </div>
          </div>
        </div>

        <div className='columns'>
          <div className='column is-half'>
            <button
              type='button'
              className='button is-large is-dark'
              onClick={() => {
                setDoc({
                  url: sources.url,
                })
                setPageNo(1)
                setScale(0.5)
                setRotation(0)
              }}>
              View Document 1
            </button>
          </div>
          <div className='column is-half'>
            <button
              type='button'
              className='button is-large is-dark'
              onClick={() => {
                setDoc({
                  base64: sources.base64,
                })
                setPageNo(1)
                setScale(0.5)
                setRotation(0)
              }}>
              View Document 2
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='columns mx-2 my-5'>
        <FromUrl />
      </div>
      <div className='columns mx-2 my-5'>
        <FromBase64 />
      </div>
      <div className='columns mx-2 my-5'>
        <ErrorHandling />
      </div>
      <div className='columns mx-2 my-5'>
        <CustomErrorHandling />
      </div>
      <div className='columns mx-2 my-5'>
        <WithCustomLoader />
      </div>
      <div className='columns mx-2 my-5'>
        <WithCustomStartingPage />
      </div>
      <div className='columns mx-2 my-5'>
        <WithCustomScale />
      </div>
      <div className='columns mx-2 my-5'>
        <WithCustomNavigationStyles />
      </div>
      <div className='columns mx-2 my-5'>
        <WithCustomNavigation />
      </div>
      <div className='columns mx-2 my-5'>
        <WithOnDocumentClick />
      </div>
      <div className='columns mx-2 my-5'>
        <WithoutNavigation />
      </div>
      <div className='columns mx-2 my-5'>
        <WithoutZoomRotation />
      </div>
      <div className='columns mx-2 my-5'>
        <WithNavbarTop />
      </div>
      <div className='columns mx-2 my-5'>
        <WithWatermark />
      </div>
      <div className='columns mx-2 my-5'>
        <WithExternalControl />
      </div>
    </>
  )
}

export default App
