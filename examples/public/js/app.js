import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import PDFViewer from '../../../index.js'
import sources from './sources.js';

const FromUrl = () => (<div>
  <h1>Fetch PDF by URL</h1>
  <PDFViewer document={{
    url: sources.url
  }} />
</div>);

const FromBase64 = () => (<div>
  <h1>Load PDF from base 64 string</h1>
  <PDFViewer document={{
    base64: sources.base64
  }} />
</div>);

const WithCustomLoader = () => (<div>
  <h1>Custom loader element</h1>
  <PDFViewer document={{
    url: sources.url
  }} loader={<h2 style={{color: '#fa5b35'}}>Custom loader element</h2>}/>
</div>);

const WithCustomStartingPage = () => (<div>
  <h1>Custom starting page</h1>
  <PDFViewer document={{
    url: sources.url
  }} page={5} />
</div>);

const WithCustomScale = () => (<div>
  <h1>Custom scale</h1>
  <PDFViewer document={{
    base64: sources.base64
  }} scale={0.5} />
</div>);

const WithCustomNavigationStyles = () => (<div>
  <h1>Custom css classes</h1>
  <PDFViewer document={{
    url: sources.url
  }}
  css="customViewer"
  navigation={{
    css: {
      previousPageBtn: 'customPrevBtn',
      nextPageBtn: 'customNextBtn',
      pages: 'customPages',
      wrapper: 'customWrapper'
    }
  }} />
</div>);

const CustomPrevButton = (props) => {
  const {
    page,
    pages,
    handlePrevClick
  } = props;
  if (page === 1) return <div></div>;

  return <h3 style={{cursor: 'pointer', display: 'inline-block', marginRight: 24}} onClick={handlePrevClick}>Previous page</h3>;
};
CustomPrevButton.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};
const CustomNextButton = (props) => {
  const {
    page,
    pages,
    handleNextClick
  } = props;
  if (page === pages) return <div></div>;

  return <h3 style={{cursor: 'pointer', display: 'inline-block', marginLeft: 24}} onClick={handleNextClick}>Next page</h3>;
};
CustomNextButton.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired
};
const CustomPages = (props) => {
  const {
    page,
    pages
  } = props;
  return <h3 style={{display: 'inline-block'}}>Page {page} from {pages}</h3>;
};
CustomPages.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};

const WithCustomNavigationElements = () => (<div>
  <h1>Custom navigation elements</h1>
  <PDFViewer document={{
    url: sources.url
  }}
  css="customViewer"
  navigation={{
    elements: {
      previousPageBtn: CustomPrevButton,
      nextPageBtn: CustomNextButton,
      pages: CustomPages
    }
  }} />
</div>);

const CustomNavigation = (props) => {
  const {
    page,
    pages
  } = props;

  const {
    handlePrevClick,
    handleNextClick
  } = props;

  return (<div className="customWrapper">
    <CustomPrevButton page={page} pages={pages} handlePrevClick={handlePrevClick} />
    <CustomPages page={page} pages={pages} />
    <CustomNextButton page={page} pages={pages} handleNextClick={handleNextClick} />
  </div>);
};
CustomNavigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
};

const WithCustomNavigation = () => (<div>
  <h1>Custom navigation</h1>
  <PDFViewer document={{
    url: sources.url
  }}
  css="customViewer"
  navigation={CustomNavigation} />
</div>);

class Example extends React.Component {
  render() {
    return <div>
      <WithCustomNavigation />
      <WithCustomNavigationElements />
      <WithCustomNavigationStyles />
      <WithCustomScale />
      <WithCustomStartingPage />
      <WithCustomLoader />
      <FromUrl />
      <FromBase64 />
    </div>
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('App')
);
