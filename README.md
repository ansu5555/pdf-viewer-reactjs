# pdf-viewer-reactjs

Simple react PDF Viewer component with controls like page navigation, zoom and rotation. Every element can be styled upon your preferences using default classes your own and also custom react element can be passed.

it is originally forked from [mgr-pdf-viewer-react](https://github.com/MGrin/mgr-pdf-viewer-react)

## Example: [pdf-viewer-reactjs](https://ansu5555.github.io/pdf-viewer-reactjs/)

# How to install

```
npm install pdf-viewer-reactjs --save
```

# How to use

Since it is a React module, I suppose you have the webpack and babel configured.

```js
import React from 'react';

const ExamplePDFViewer = () => {
    return (
        <PDFViewer
            document={{
                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf'
            }}
        />
    );
};

export default ExamplePDFViewer;
```

# Documentation

React component prop. types:

-   `document`:

    -   Type:

        ```js
        PropTypes.shape({
            file: Any, // File object,
            url: String, // URL to fetch the pdf
            connection: Object, // connection parameters to fetch the PDF, see PDF.js docs
            base64: String, // PDF file encoded in base64
            binary: UInt8Array
        });
        ```

    -   Required: **true**
    -   Description: Provides a way to fetch the PDF document

-   `loader`:

    -   Type: _Node_
    -   Required: **false**
    -   Description: A custom loader element that will be shown while the PDF is loading

-   `page`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: The page that will be shown first on document load

-   `scale`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: Scale factor relative to the component parent element

-   `onDocumentClick`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called only on clicking the PDF page itself, NOT on the navbar

-   `css`:

    -   Type: _String_
    -   Required: **false**
    -   Description: CSS classes that will be setted for the component wrapper

-   `hideNavbar`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: By default navbar is displayed, but can be hidden by passing this prop

-   `navigation`:

    -   Type:

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
                    pages: Any // pages indicator React Element
                })
            }),
            // Or a full navigation component
            PropTypes.any // Full navigation React element
        ]);
        ```

    -   Required: **false**
    -   Description: Defines the navigation bar styles and/or elements.

        The `previousPageBtn` and the `nextPageBtn` elements should take following properties: `page` for current page number, `pages` for total number of pages, and the callback function `handlePrevClick` for the `previousPageBtn` and `handleNextClick` for the `nextPageBtn`.

        The `pages` element should take following properties: `page` for current page number, `pages` for total number of pages.

        The `navigation` element (so the full navigation element) should accept following properties: `page` for current page number, `pages` for total number of pages, and the callback functions `handlePrevClick` and `handleNextClick`.
