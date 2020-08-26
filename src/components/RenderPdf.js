import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import Alert from './Alert'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
let pdf = null

const RenderPdf = ({
    document,
    withCredentials,
    password,
    pageNum,
    scale,
    rotation,
    pageCount,
    protectContent,
    watermark,
    alert,
}) => {
    const [error, setError] = useState({ status: false, message: '' })
    const canvasRef = useRef(null)
    const isInitialMount = useRef(true)

    const AlertComponent = alert ? alert : Alert

    const fetchPDF = async () => {
        try {
            let objDocInit = { withCredentials, password }
            if (document.url == undefined) {
                objDocInit.data = atob(document.base64)
            } else {
                objDocInit.url = document.url
            }
            pdf = await pdfjs.getDocument(objDocInit).promise
            await displayPage()
        } catch (error) {
            console.warn('Error while opening the document !\n', error)
            setError({
                status: true,
                message: 'Error while opening the document !',
            })
        }
    }

    const displayPage = async () => {
        // Get PDF file
        try {
            const page = await pdf.getPage(pageNum)
            const viewport = page.getViewport({ scale, rotation })

            // Prepare canvas using PDF page dimensions
            const canvas = canvasRef.current
            canvas.height = viewport.height
            canvas.width = viewport.width

            // Render PDF page into canvas context
            let canvasContext = canvas.getContext('2d')
            const renderContext = {
                canvasContext,
                viewport,
            }
            const renderTask = page.render(renderContext)
            try {
                await renderTask.promise
                if (Object.entries(watermark).length !== 0) {
                    //watermark config
                    const {
                        text,
                        diagonal,
                        opacity,
                        font,
                        size,
                        color,
                    } = watermark
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
                    canvasContext.translate(
                        viewport.width / 2,
                        viewport.height / 2
                    )

                    // rotate the context and center the text
                    if (diagonal) {
                        canvasContext.rotate(-0.785)
                    }
                    canvasContext.fillText(text, -width / 2, height / 2)
                }

                // call pageCountfunction
                pageCount(pdf.numPages)
            } catch (error) {
                console.warn('Error occured while rendering !\n', error)
                setError({
                    status: true,
                    message: 'Error occured while rendering !',
                })
            }
        } catch (error) {
            console.warn('Error while reading the pages !\n', error)
            setError({
                status: true,
                message: 'Error while reading the pages !',
            })
        }
    }

    useEffect(() => {
        fetchPDF()
    }, [document, password])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false
        } else {
            displayPage()
        }
    }, [pageNum, scale, rotation, pageCount])

    if (error.status) {
        pageCount(-1)
        return <AlertComponent message={error.message} />
    } else {
        return (
            <canvas
                onContextMenu={e =>
                    protectContent ? e.preventDefault() : null
                }
                ref={canvasRef}
                width={typeof window !== 'undefined' && window.innerWidth}
                height={typeof window !== 'undefined' && window.innerHeight}
            />
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
    pageCount: PropTypes.func,
    protectContent: PropTypes.bool,
    watermark: PropTypes.shape({
        text: PropTypes.string,
        diagonal: PropTypes.bool,
        opacity: PropTypes.string,
        size: PropTypes.string,
        color: PropTypes.string,
    }),
}

RenderPdf.defaultProps = {
    pageCount() {},
    protectContent: false,
    watermark: {},
}

export default RenderPdf
