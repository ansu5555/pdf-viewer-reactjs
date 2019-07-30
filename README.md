# pdf-viewer-reactjs

Simple react PDF Viewer component with controls like

-   Page navigation
-   Zoom
-   Rotation

Every element can be styled upon your preferences using default classes your own and also custom react element can be passed.

it is originally forked from [mgr-pdf-viewer-react](https://github.com/MGrin/mgr-pdf-viewer-react)

### Example: Live demo is available [here](https://ansu5555.github.io/pdf-viewer-reactjs/)

# How to install

```
npm install pdf-viewer-reactjs
```

# How to use

```js
import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

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

-   `scaleStep`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: Scale factor to be increased or decreased on Zoom-in or zoom-out

-   `maxScale`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: Maximun scale factor for zoom-in

-   `minScale`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: Minimum scale factor for zoom-in

-   `rotationAngle`:

    -   Type: _Number_
    -   Required: **false**
    -   Description: Initial rotation of the document, values can be -90, 0 or 90

-   `onDocumentClick`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called only on clicking the PDF page itself, NOT on the navbar

-   `onPrevBtnClick`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called on clicking on the previous page button, page number can be accessed in the function.

-   `onNextBtnClick`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called on clicking on the next page button, page number can be accessed in the function.

-   `onZoom`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called on clicking on Zoom controls, zoom scale can be accessed in the function.

-   `onRotation`:

    -   Type: _Function_
    -   Required: **false**
    -   Description: A function that will be called on clicking on Rotation controls, rotation angle can be accessed in the function.

*   `css`:

    -   Type: _String_
    -   Required: **false**
    -   Description: CSS classes that will be setted for the component wrapper

*   `canvasCss`:

    -   Type: _String_
    -   Required: **false**
    -   Description: CSS classes that will be setted for the PDF page

*   `hideNavbar`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: By default navbar is displayed, but can be hidden by passing this prop

*   `navbarOnTop`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: By default navbar is displayed on bottom, but can be placed on top by passing this prop

*   `hideZoom`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: By default zoom buttons are displayed, but can be hidden by passing this prop

*   `hideRotation`:

    -   Type: _Boolean_
    -   Required: **false**
    -   Description: By default rotation buttons are displayed, but can be hidden by passing this prop

*   `navigation`:

    -   Type:

        ```js
        PropTypes.oneOfType([
            // Can be an object with css classes or react elements to be rendered
            PropTypes.shape({
                css: PropTypes.shape({
                    navbarWrapper: String,  // CSS Class for the previous page button
                    zoomOutBtn: String,  // CSS Class for the previous page button
                    resetZoomBtn: String,  // CSS Class for the previous page button
                    zoomInBtn: String,  // CSS Class for the previous page button
                    previousPageBtn: String,  // CSS Class for the previous page button
                    pageIndicator: String,  // CSS Class for the previous page button
                    nextPageBtn: String,  // CSS Class for the previous page button
                    rotateLeftBtn: String,  // CSS Class for the previous page button
                    resetRotationBtn: String,  // CSS Class for the previous page button
                    rotateRightBtn: String  // CSS Class for the previous page button
                })
            // Or a full navigation component
            PropTypes.any // Full navigation React element
        ]);
        ```

    -   Required: **false**
    -   Description: Defines the navigation bar styles and/or elements.

---

The `navigation` element should accept following properties:

-   `page` for current page number

-   `pages` for total number of pages

-   `scale` for zoom

-   `maxScale` for maximum zoom

-   `minScale` for minimum zoom

-   `rotationAngle` for rotation

-   `hideZoom` for hiding zoom

-   `hideRotation` for hding rotation

-   `handleNextClick` for next button click

-   `handlePrevClick` for previous button click

-   `handleZoomIn` for zoom-in button click

-   `handleResetZoom` for reset zoom button click

-   `handleZoomOut` for zoom-out button click

-   `handleRotateLeft` for left rotation

-   `handleResetRotation` for reset rotation

-   `handleRotateRight` for right rotation
