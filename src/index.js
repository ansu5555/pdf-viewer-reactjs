import React from 'react';
import PropTypes from 'prop-types';
import PDF from 'react-pdf-js';

const styles = {};
styles.navigation = {
  display: 'inline-block'
};

styles.controls = {
  ...styles.navigation,
  textAlign: 'center'
};

styles.wrapper = {
  ...styles.controls,
  width: '100%',
  heigth: 24,
  backgroundColor: '#323232',
  color: '#fff'
};

styles.previous = {
  ...styles.controls,
  marginRight: 12,
  cursor: 'pointer'
};

styles.next = {
  ...styles.controls,
  marginLeft: 12,
  cursor: 'pointer'
};

styles.pages = {
  ...styles.controls
};

const PreviousPageButton = (props) => {
  const {
    css,
    page,
    handlePrevClick
  } = props;

  const prevClass = `
    ${css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--previous"}
    ${page === 1 ? ' mgrpdf-navigation__controls--disabled' : ''}
  `;

  return <div className={prevClass} style={css ? {} : styles.previous} onClick={handlePrevClick}>
    <a>{"<"}</a>
  </div>;
};
PreviousPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

const NextPageButton = (props) => {
  const {
    css,
    page,
    pages,
    handleNextClick
  } = props;

  const nextClass = `
    ${css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--next"}
    ${page === pages ? ' mgrpdf-navigation__controls--disabled' : ''}
  `;

  return <div className={nextClass} style={css ? {} : styles.next} onClick={handleNextClick}>
    <a>{">"}</a>
  </div>;
};
NextPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired
};

const PagesIndicator = (props) => {
  const {
    css,
    page,
    pages
  } = props;

  const pagesClass = css ? css : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--pages";

  return (<div className={pagesClass} style={css ? {} : styles.pages}>
    {page}/{pages}
  </div>);
};
PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};


const Navigation = (props) => {
  const {
    page,
    pages,
    css,
    elements
  } = props;

  const {
    handlePrevClick,
    handleNextClick
  } = props;

  let prevEl, nextEl, pagesEl;
  if (elements.previousPageBtn) {
    prevEl = <elements.previousPageBtn page={page} pages={pages} handlePrevClick={handlePrevClick} />;
  } else {
    prevEl = <PreviousPageButton css={css.previousPageBtn} page={page} pages={pages} handlePrevClick={handlePrevClick} />;
  }

  if (elements.nextPageBtn) {
    nextEl = <elements.nextPageBtn page={page} pages={pages} handleNextClick={handleNextClick} />;
  } else {
    nextEl = <NextPageButton css={css.nextPageBtn} page={page} pages={pages} handleNextClick={handleNextClick} />;
  }

  if (elements.pages) {
    pagesEl = <elements.pages page={page} pages={pages} />;
  } else {
    pagesEl = <PagesIndicator css={css.pages} page={page} pages={pages} />;
  }

  const wrapperClass = css.wrapper ? css.wrapper : "mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--wrapper";

  return (<div className={wrapperClass} style={css.wrapper ? {} : styles.wrapper}>
    {prevEl}
    {pagesEl}
    {nextEl}
  </div>);
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,

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
  }),

  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
};
Navigation.defaultProps = {
  css: {},
  elements: {}
};


const mgrpdfStyles = {};
mgrpdfStyles.wrapper = {
  textAlign: 'center'
};

class PDFViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: 0,
      page: props.page || 1
    };

    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page) {
      this.setState({
        page: nextProps.page
      });
    }
  }

  onDocumentComplete(pages) {
    this.setState({
      pages
    });
  }

  handlePrevClick() {
    if (this.state.page === 1) return;

    this.setState({
      page: this.state.page - 1
    });
  }

  handleNextClick() {
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

    const pdf = (<PDF
                  file={source.file || source.url}
                  content={source.base64}
                  binaryContent={source.binary}
                  documentInitParameters={source.connection}
                  loading={loader}
                  page={page}
                  scale={scale}
                  onDocumentComplete={this.onDocumentComplete} />);

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

    return <div className={css ? css : "mgrpdf__wrapper"} style={mgrpdfStyles.wrapper}>
      {pdf}
      {nav}
    </div>;
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
  page: 1,
  scale: 1
};

export default PDFViewer;
