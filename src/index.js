import React from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';

import Navigation from './Navigation';

const mgrpdfStyles = {};

mgrpdfStyles.wrapper = {
  textAlign: 'center'
};

class PDFViewer extends React.Component {
  state = {
    pages: 0,
    page: 1,
  }

  componentWillMount() {
    this.setState({
      pages: null,
      page: this.props.page || 1,
    })
  }

  componentWillReceiveProps({ page }) {
    this.setState({ page: page || this.state.page });
  }

  onDocumentComplete = (pages) => {
    this.setState({
      pages
    });
  }

  handlePrevClick = () => {
    if (this.state.page === 1) return;

    this.setState({
      page: this.state.page - 1
    });
  }

  handleNextClick = () => {
    if (this.state.page === this.state.pages) return;

    this.setState({
      page: this.state.page + 1
    });
  }

  render() {
    const source = this.props.document;
    const {
      loader,
      scale,
      navigation,
      css
    } = this.props;

    const {
      page,
      pages
    } = this.state;

    const NavigationElement = navigation;

    const pdf = (
      <PDF
        file={source.file || source.url}
        content={source.base64}
        binaryContent={source.binary}
        documentInitParameters={source.connection}
        loading={loader}
        page={page}
        scale={scale}
        onDocumentComplete={this.onDocumentComplete} />
    );

    let nav = null;
    if (pages > 0){
      nav = !navigation || (navigation && typeof(navigation) === 'object')
        ? <Navigation
            page={page}
            pages={pages}
            css={navigation ? navigation.css : undefined}
            elements={navigation ? navigation.elements : undefined}
            handleNextClick={this.handleNextClick}
            handlePrevClick={this.handlePrevClick} />
        : <NavigationElement
            page={page}
            pages={pages}
            handleNextClick={this.handleNextClick}
            handlePrevClick={this.handlePrevClick} />;
    }

    return (
      <div className={css ? css : 'mgrpdf__wrapper'} style={mgrpdfStyles.wrapper}>
        {pdf}
        {nav}
      </div>
    );
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
  }).isRequired,

  loader: PropTypes.node,
  page: PropTypes.number,
  scale: PropTypes.number,
  css: PropTypes.string,

  navigation: PropTypes.oneOfType([
    // Can be an object with css classes or react elements to be rendered
    PropTypes.shape({
      css: PropTypes.shape({
        previousPageBtn: PropTypes.string,
        nextPageBtn: PropTypes.string,
        pages: PropTypes.string,
        wrapper: PropTypes.string
      }),
      elements: PropTypes.shape({
        previousPageBtn: PropTypes.any,
        nextPageBtn: PropTypes.any,
        pages: PropTypes.any
      })
    }),
    // Or a full navigation component
    PropTypes.any
  ])
};

PDFViewer.defaultProps = {
  scale: 1
};

export default PDFViewer;
