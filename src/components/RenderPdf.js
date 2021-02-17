import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import Alert from './Alert'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const RenderPdf = ({
  document,
  withCredentials,
  password,
  pageNum,
  scale,
  rotation,
  pageCount,
  changePage,
  showThumbnail,
  protectContent,
  watermark,
  alert,
  canvasCss,
}) => {
  const [pdf, setPDF] = useState(null)
  const [thumbnailImages, setThumbnailImages] = useState(null)
  const [prevRenderTask, setPrevRenderTask] = useState(null)
  const [error, setError] = useState({ status: false, message: '' })
  const canvasRef = useRef(null)
  const thumbnailRef = useRef(null)
  const selectedRef = useRef(null)

  const [thumbnails, setThumbnails] = useState([])

  const prevDocument = usePrevious(document)
  const prevPassword = usePrevious(password)

  const AlertComponent = alert ? alert : Alert

  const fetchPDF = async () => {
    // Get PDF file
    let pdfDoc = null
    let thumbImages = null
    try {
      if (
        JSON.stringify(prevDocument) !== JSON.stringify(document) ||
        prevPassword.base64 !== password.url
      ) {
        let objDocInit = { withCredentials, password }
        if (document.url == undefined) {
          objDocInit.data = atob(document.base64)
        } else {
          objDocInit.url = document.url
        }
        pdfDoc = await pdfjs.getDocument(objDocInit).promise
        thumbImages = await createImages(pdfDoc)

        // call pageCountfunction to update page count
        pageCount(pdfDoc.numPages)
        displayThumbnails(thumbImages)

        setPDF(pdfDoc)
        setThumbnailImages(thumbImages)
      }
      await displayPage(pdfDoc)
    } catch (error) {
      console.warn('Error while opening the document !\n', error)
      pageCount(-1) // set page count to -1 on error
      setError({
        status: true,
        message: 'Error while opening the document !',
      })
    }
  }

  const displayPage = async (pdfDoc = null) => {
    // display pdf page
    if (pdfDoc == null) {
      pdfDoc = pdf
    }
    try {
      const page = await pdfDoc.getPage(pageNum)
      const viewport = page.getViewport({ scale, rotation })

      // Prepare canvas using PDF page dimensions
      const canvas = canvasRef.current
      canvas.height = viewport.height
      canvas.width = viewport.width

      // Render PDF page into canvas context
      let canvasContext = canvas.getContext('2d')
      canvasContext.clearRect(0, 0, canvas.width, canvas.height)
      canvasContext.beginPath()
      const renderContext = {
        canvasContext,
        viewport,
      }
      const renderTask = page.render(renderContext)
      // cancel previous render task
      if (prevRenderTask != null) {
        prevRenderTask._internalRenderTask.cancel()
      }
      try {
        await renderTask.promise
        if (Object.entries(watermark).length !== 0) {
          //watermark config
          const { text, diagonal, opacity, font, size, color } = watermark
          // setup watermark text for filling
          canvasContext.globalAlpha = opacity
          canvasContext.font = `${size * scale}px ${
            font !== '' ? font : 'Comic Sans MS'
          }`
          canvasContext.fillStyle = color

          // get the metrics with font settings
          var metrics = canvasContext.measureText(text)
          var width = metrics.width
          var height = size * scale // height is font size
          canvasContext.translate(viewport.width / 2, viewport.height / 2)

          // rotate the context and center the text
          if (diagonal) {
            canvasContext.rotate(-0.785)
          }
          canvasContext.fillText(text, -width / 2, height / 2)
        }
      } catch (error) {
        console.warn('Error occured while rendering !\n', error)
        pageCount(-1) // set page count to -1 on error
        setError({
          status: true,
          message: 'Error occured while rendering !',
        })
      }
      setPrevRenderTask(renderTask)
    } catch (error) {
      console.warn('Error while reading the pages !\n', error)
      pageCount(-1) // set page count to -1 on error
      setError({
        status: true,
        message: 'Error while reading the pages !',
      })
    }
  }

  const createImages = async pdf => {
    // create images for all pages
    const imgList = []

    if (Object.entries(showThumbnail).length !== 0) {
      let scale = 0.1
      let rotation = 0
      if (1 <= showThumbnail.scale && showThumbnail.scale <= 5) {
        scale = showThumbnail.scale / 10
      }
      if (
        showThumbnail.rotationAngle === -90 ||
        showThumbnail.rotationAngle === 90
      ) {
        rotation = showThumbnail.rotationAngle
      }

      for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
        const page = await pdf.getPage(pageNo)
        const viewport = page.getViewport({ scale, rotation })

        // Prepare canvas using PDF page dimensions
        const canvas = thumbnailRef.current
        canvas.height = viewport.height
        canvas.width = viewport.width

        // Render PDF page into canvas context
        let canvasContext = canvas.getContext('2d')
        canvasContext.clearRect(0, 0, canvas.width, canvas.height)
        canvasContext.beginPath()
        const renderContext = {
          canvasContext,
          viewport,
        }
        const renderTask = page.render(renderContext)
        await renderTask.promise
        if (Object.entries(watermark).length !== 0) {
          //watermark config
          const { text, diagonal, opacity, font, size, color } = watermark
          // setup watermark text for filling
          canvasContext.globalAlpha = opacity
          canvasContext.font = `${size * scale}px ${
            font !== '' ? font : 'Comic Sans MS'
          }`
          canvasContext.fillStyle = color

          // get the metrics with font settings
          var metrics = canvasContext.measureText(text)
          var width = metrics.width
          var height = size * scale // height is font size
          canvasContext.translate(viewport.width / 2, viewport.height / 2)

          // rotate the context and center the text
          if (diagonal) {
            canvasContext.rotate(-0.785)
          }
          canvasContext.fillText(text, -width / 2, height / 2)
        }

        // create image from canvas and push into array
        imgList.push({
          image: canvas.toDataURL('image/png'),
          height: viewport.height,
          width: viewport.width,
        })
      }
    }
    return imgList
  }

  const displayThumbnails = images => {
    if (Object.entries(showThumbnail).length !== 0 && images !== null) {
      // display thumbnails for all pages
      const thumbnailList = []

      for (let pageNo = 1; pageNo <= images.length; pageNo++) {
        let image = images[pageNo - 1].image
        let height = images[pageNo - 1].height
        let width = images[pageNo - 1].width
        let thumbnailCss = ''
        let thumbnailStyle = {
          height,
          width,
          display: 'flex',
          cursor: 'pointer',
        }
        if (showThumbnail.thumbCss && showThumbnail.selectedThumbCss) {
          if (pageNum === pageNo) {
            thumbnailCss = showThumbnail.selectedThumbCss
          } else {
            thumbnailCss = showThumbnail.thumbCss
          }
        } else {
          if (pageNum === pageNo) {
            thumbnailStyle.margin = '10px 20px'
            thumbnailStyle.border = '5px solid rgba(58, 58, 64, 1)'
            thumbnailStyle.boxShadow =
              'rgba(0, 0, 0, 0.6) 0 4px 8px 0, rgba(0, 0, 0, 0.58) 0 6px 20px 0'
          } else {
            thumbnailStyle.margin = '15px 25px'
            thumbnailStyle.boxShadow = 'rgba(0, 0, 0, 0.6) 0px 2px 2px 0px'
          }
        }

        thumbnailList.push(
          <img
            style={thumbnailStyle}
            className={thumbnailCss}
            onClick={() => changePage(pageNo)}
            ref={pageNum === pageNo ? selectedRef : null}
            key={pageNo}
            alt={`thumbnail of page ${pageNo}`}
            src={image}
          />
        )
      }
      // insert space at the end of all pages
      thumbnailList.push(<div key={0} style={{ padding: '0px 10px' }}></div>)
      setThumbnails(thumbnailList)
    }
  }

  const scrollThumbnail = () => {
    // scroll selected thumbnail into view
    if (
      selectedRef.current !== null &&
      Object.entries(showThumbnail).length !== 0
    ) {
      selectedRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      })
    }
  }

  useEffect(() => {
    fetchPDF()
  }, [document, password, pageNum, scale, rotation])

  useEffect(() => {
    displayThumbnails(thumbnailImages)
    scrollThumbnail()
  }, [pageNum])

  if (Object.entries(showThumbnail).length !== 0) {
    let thumbContainerStyle = {
      backgroundColor: showThumbnail.backgroundColor
        ? showThumbnail.backgroundColor
        : '#EAE6DA',
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'auto',
    }

    if (showThumbnail.onTop) {
      return (
        <>
          <div
            className={canvasCss ? canvasCss : ''}
            style={
              canvasCss
                ? {}
                : {
                    height: '1000px',
                    overflow: 'auto',
                  }
            }>
            <div
              style={error.status ? { display: 'block' } : { display: 'none' }}>
              <AlertComponent message={error.message} />
            </div>
            <div style={thumbContainerStyle}>{thumbnails}</div>
            <canvas
              style={error.status ? { display: 'none' } : null}
              onContextMenu={e => (protectContent ? e.preventDefault() : null)}
              ref={canvasRef}
              width={typeof window !== 'undefined' && window.innerWidth}
              height={typeof window !== 'undefined' && window.innerHeight}
            />
          </div>

          <canvas ref={thumbnailRef} style={{ display: 'none' }} />
        </>
      )
    } else {
      return (
        <>
          <div
            className={canvasCss ? canvasCss : ''}
            style={
              canvasCss
                ? {}
                : {
                    height: '1000px',
                    overflow: 'auto',
                  }
            }>
            <div
              style={error.status ? { display: 'block' } : { display: 'none' }}>
              <AlertComponent message={error.message} />
            </div>
            <canvas
              style={error.status ? { display: 'none' } : null}
              onContextMenu={e => (protectContent ? e.preventDefault() : null)}
              ref={canvasRef}
              width={typeof window !== 'undefined' && window.innerWidth}
              height={typeof window !== 'undefined' && window.innerHeight}
            />
          </div>
          <div style={thumbContainerStyle}>{thumbnails}</div>
          <canvas ref={thumbnailRef} style={{ display: 'none' }} />
        </>
      )
    }
  } else {
    return (
      <div>
        <div
          className={canvasCss ? canvasCss : ''}
          style={
            canvasCss
              ? {}
              : {
                  height: '1000px',
                  overflow: 'auto',
                }
          }>
          <div
            style={error.status ? { display: 'block' } : { display: 'none' }}>
            <AlertComponent message={error.message} />
          </div>
          <canvas
            style={error.status ? { display: 'none' } : null}
            onContextMenu={e => (protectContent ? e.preventDefault() : null)}
            ref={canvasRef}
            width={typeof window !== 'undefined' && window.innerWidth}
            height={typeof window !== 'undefined' && window.innerHeight}
          />
        </div>
      </div>
    )
  }
}

RenderPdf.propTypes = {
  document: PropTypes.any.isRequired,
  withCredentials: PropTypes.bool,
  password: PropTypes.string,
  pageNum: PropTypes.number.isRequired,
  scale: PropTypes.number.isRequired,
  rotation: PropTypes.number.isRequired,
  changePage: PropTypes.func,
  pageCount: PropTypes.func,
  showThumbnail: PropTypes.shape({
    scale: PropTypes.number,
    rotationAngle: PropTypes.number,
    onTop: PropTypes.bool,
    backgroundColor: PropTypes.string,
    thumbCss: PropTypes.string,
    selectedThumbCss: PropTypes.string,
  }),
  protectContent: PropTypes.bool,
  watermark: PropTypes.shape({
    text: PropTypes.string,
    diagonal: PropTypes.bool,
    opacity: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
  }),
  canvasCss: PropTypes.string,
}

RenderPdf.defaultProps = {
  changePage() {},
  pageCount() {},
  showThumbnail: {},
  protectContent: false,
  watermark: {},
  canvasCss: '',
}

export default RenderPdf
