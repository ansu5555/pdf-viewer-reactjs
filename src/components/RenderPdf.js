import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import Alert from './Alert'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker
let pdf = null

const RenderPdf = ({ src, pageNum, scale, rotation, pageCount }) => {
    const [error, setError] = useState({ status: false, message: '' })
    const canvasRef = useRef(null)

    const fetchPDF = async () => {
        // Get PDF file
        try {
            pdf = await pdfjs.getDocument(src).promise
            try {
                const page = await pdf.getPage(pageNum)
                const viewport = page.getViewport({
                    scale: scale,
                    rotation: rotation,
                })

                // Prepare canvas using PDF page dimensions
                const canvas = canvasRef.current
                canvas.height = viewport.height
                canvas.width = viewport.width

                // Render PDF page into canvas context
                const renderContext = {
                    canvasContext: canvas.getContext('2d'),
                    viewport: viewport,
                }
                const renderTask = page.render(renderContext)
                try {
                    await renderTask.promise
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
        } catch (error) {
            console.warn('Error while opening the document !\n', error)
            setError({
                status: true,
                message: 'Error while opening the document !',
            })
        }
    }

    useEffect(() => {
        fetchPDF()
    }, [src, pageNum, scale, rotation, pageCount])

    if (error.status) {
        pageCount(-1)
        return <Alert message={error.message} />
    } else {
        return (
            <canvas
                ref={canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
            />
        )
    }
}

RenderPdf.propTypes = {
    src: PropTypes.any.isRequired,
    pageNum: PropTypes.number,
    scale: PropTypes.number,
    rotation: PropTypes.number,
    pageCount: PropTypes.func,
}

RenderPdf.defaultProps = {
    pageNum: 1,
    scale: 1,
    rotation: 0,
    pageCount() {},
}

export default RenderPdf
