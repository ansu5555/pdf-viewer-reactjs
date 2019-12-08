import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import pdfjs from 'pdfjs-dist'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

import Alert from './Alert'

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker

class RenderPdf extends Component {
    constructor(props) {
        super(props)
        this.canvasRef = createRef(null)
        this.pdf = null
        this.state = { error: false, errorMessage: '', src: props.src }
        this.fetchPdf = this.fetchPdf.bind(this)
    }

    async fetchPdf() {
        // Get PDF file
        try {
            this.pdf = await pdfjs.getDocument(this.state.src).promise
            try {
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
                try {
                    await renderTask.promise
                    this.props.pageCount(this.pdf.numPages)
                } catch (error) {
                    console.log('Error occured while rendering !\n', error)
                    this.setState({
                        error: true,
                        errorMessage: 'Error occured while rendering !',
                    })
                }
            } catch (error) {
                console.log('Error while reading the pages !\n', error)
                this.setState({
                    error: true,
                    errorMessage: 'Error while reading the pages !',
                })
            }
        } catch (error) {
            console.log('Error while opening the document !\n', error)
            this.setState({
                error: true,
                errorMessage: 'Error while opening the document !',
            })
        }
    }

    render() {
        if (this.state.error) {
            this.props.pageCount(-1)
            return <Alert message={this.state.errorMessage} />
        } else {
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
}

RenderPdf.propTypes = {
    src: PropTypes.any.isRequired,
    page: PropTypes.number,
    scale: PropTypes.number,
    rotation: PropTypes.number,
    pageCount: PropTypes.func,
}

RenderPdf.defaultProps = {
    page: 1,
    scale: 1,
    rotation: 0,
    pageCount() {},
}

export default RenderPdf
