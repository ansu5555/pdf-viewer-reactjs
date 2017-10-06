import React from 'react';
import CustomNavigation, {
  CustomPrevButton,
  CustomNextButton,
  CustomPages,
} from './Navigation';

import PDFViewer from './mgr-pdf-viewer-react';
import sources from './source';

import './App.css';

const FromUrl = () => (<div>
  <h1>Fetch PDF by URL</h1>
  <PDFViewer
    document={{
      url: sources.url
    }} />
</div>);

const FromBase64 = () => (<div>
  <h1>Load PDF from base 64 string</h1>
  <PDFViewer
    document={{
      base64: sources.base64
    }} />
</div>);

const WithCustomLoader = () => (<div>
  <h1>Custom loader element</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    loader={<h2 style={{color: '#fa5b35'}}>Custom loader element</h2>}/>
</div>);

const WithCustomStartingPage = () => (<div>
  <h1>Custom starting page</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    page={5} />
</div>);

const WithCustomScale = () => (<div>
  <h1>Custom scale</h1>
  <PDFViewer
    document={{
      base64: sources.base64
    }}
    scale={0.5} />
</div>);

const WithCustomNavigationStyles = () => (<div>
  <h1>Custom css classes</h1>
  <PDFViewer
    document={{
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

const WithCustomNavigationElements = () => (<div>
  <h1>Custom navigation elements</h1>
  <PDFViewer
    document={{
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

const WithCustomNavigation = () => (<div>
  <h1>Custom navigation</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    css="customViewer"
    navigation={CustomNavigation} />
</div>);

export default () => (
  <div>
    <FromUrl />
    <FromBase64 />
    <WithCustomLoader />
    <WithCustomStartingPage />
    <WithCustomScale />
    <WithCustomNavigationStyles />
    <WithCustomNavigationElements />
    <WithCustomNavigation />
  </div>
);
