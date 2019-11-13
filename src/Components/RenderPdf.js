import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'

import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

class RenderPdf extends Component {
    constructor(props) {
        super(props)
        this.pdf = null
        this.canvasRef = createRef(null)
        this.state = {
            src: props.src,
        }
    }

    async fetchPdf() {
        // Get PDF file
        this.pdf = await pdfjs.getDocument(this.state.src).promise
        this.props.pageCount(this.pdf.numPages)
        const page = await this.pdf.getPage(this.props.page)
        const viewport = page.getViewport({
            scale: this.props.scale,
            rotation: this.props.rotation,
        })

        // Prepare canvas using PDF page dimensions
        const canvas = this.canvasRef.current
        canvas.height = viewport.height
        canvas.width = viewport.width

        // Render PDF page into canvas context
        const renderContext = {
            canvasContext: canvas.getContext('2d'),
            viewport: viewport,
        }

        const renderTask = page.render(renderContext)

        await renderTask.promise
    }

    render() {
        this.fetchPdf()

        return (
            <canvas
                ref={this.canvasRef}
                width={window.innerWidth}
                height={window.innerHeight}
            />
        )
    }
}

RenderPdf.propTypes = {
    src: PropTypes.string,
    page: PropTypes.number,
    scale: PropTypes.number,
    rotation: PropTypes.number,
    pageCount: PropTypes.func,
}

RenderPdf.defaultProps = {
    src: `${process.env.PUBLIC_URL}/long.pdf`,
    page: 1,
    scale: 1,
    rotation: 0,
    pageCount() {},
}

export default RenderPdf
