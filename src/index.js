import React, { PropTypes } from 'react';
import PDF from 'react-pdf-js';

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const source = this.props.document;
    const {
      loader
    } = this.props;

    return <PDF
            file={source.file || source.url}
            content={source.base64}
            binaryContent={source.binary}
            documentInitParameters={source.connection}
            loading={loader} />;
  }
}

PDFViewer.propTypes = {
  document: PropTypes.shape({
    file: PropTypes.any, // File object,
    url: PropTypes.string,
    connection: PropTypes.shape({
      url: PropTypes.string.isRequired, // URL to fetch the pdf
    }),
    base64: PropTypes.string, // PDF file encoded in base64
    binary: PropTypes.shape({ // UInt8Array
      data: PropTypes.any,
    })
  }),

  loader: PropTypes.node,
  page: PropTypes.number,
  scale: PropTypes.number
}

export default PDFViewer;
