import React from 'react';
import ReactDOM from 'react-dom';
import PDFViewer from '../../../index.js'
import sources from './sources.js';

class Example extends React.Component {
  render() {
    return <div>
      <h1>Fetch PDF by URL</h1>
      <PDFViewer document={{
        url: sources.url
      }} />

      <h1>Load PDF from base 64 string</h1>
      <PDFViewer document={{
        base64: sources.base64
      }} />
    </div>
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('App')
);
