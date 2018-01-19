# mgr-pdf-viewer-react
Simple react PDF Viewer component with controls. Every element can be styled upon your preferences using default classes our your own.

## Example: [mgr-pdf-viewer-react](https://mgrin.github.io/mgr-pdf-viewer-react/index.html)

# How to install
```
npm install mgr-pdf-viewer-react --save
```

# How to use

Since it is a React module, I suppose you have the webpack and babel configured.

```js
import React from 'react';

const ExamplePDFViewer = () => {
  return (<PDFViewer document={{
    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
  }} />);
}

export default ExamplePDFViewer
```

# Documentation
React component prop. types:
* `document`:
  * Type:

    ```js
    PropTypes.shape({
      file: Any, // File object,
      url: String, // URL to fetch the pdf
      connection: Object, // connection parameters to fetch the PDF, see PDF.js docs
      base64: String, // PDF file encoded in base64
      binary: UInt8Array
    })
    ```
  * Required: **true**
  * Description: Provides a way to fetch the PDF document

* `loader`:
  * Type: *Node*
  * Required: **false**
  * Description: A custom loader element that will be shown while the PDFis loading

* `page`:
  * Type: *Number*
  * Required: **false**
  * Description: The page that will be shown first on document load

* `scale`:
  * Type: *Number*
  * Required: **false**
  * Description: Scale factor relative to the component parent element

* `css`:
  * Type: *String*
  * Required: **false**
  * Description: CSS classes that will be setted for the component wrapper

* `navigation`:
  * Type:

    ```js
    PropTypes.oneOfType([
      // Can be an object with css classes or react elements to be rendered
      PropTypes.shape({
        css: PropTypes.shape({
          previousPageBtn: String, // CSS Class for the previous page button
          nextPageBtn: String, // CSS Class for the next page button
          pages: String, // CSS Class for the pages indicator
          wrapper: String // CSS Class for the navigation wrapper
        }),
        elements: PropTypes.shape({
          previousPageBtn: Any, // previous page button React element
          nextPageBtn: Any, // next page button React element
          pages: Any// pages indicator React Element
        })
      }),
      // Or a full navigation component
      PropTypes.any // Full navigation React element
    ])
    ```
  * Required: **false**
  * Description: Defines the navigation bar styles and/or elements.

    The `previousPageBtn` and the `nextPageBtn` elements should take following properties: `page` for current page number, `pages` for total number of pages, and the callback function `handlePrevClick` for the `previousPageBtn` and `handleNextClick` for the `nextPageBtn`.

    The `pages` element should take following properties: `page` for current page number, `pages` for total number of pages.

    The `navigation` element (so the full navigation element) should accept following properties: `page` for current page number, `pages` for total number of pages, and the callback functions `handlePrevClick` and `handleNextClick`.
