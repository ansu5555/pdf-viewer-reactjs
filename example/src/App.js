import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

import CustomNavigation from './Navigation';
import sources from './source';

import './App.css';

const FromUrl = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Fetch PDF by URL</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
            />
        </div>
    </div>
);

const FromBase64 = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">
            Load PDF from base 64 string
        </h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    base64: sources.base64
                }}
            />
        </div>
    </div>
);

const WithCustomLoader = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Custom loader element</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                loader={
                    <h2 style={{ color: '#fa5b35' }}>Custom loader element</h2>
                }
            />
        </div>
    </div>
);

const WithCustomStartingPage = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Custom starting page</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                page={5}
            />
        </div>
    </div>
);

const WithCustomScale = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Custom scale</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    base64: sources.base64
                }}
                scale={2}
                scaleStep={0.5}
                maxScale={5}
                minScale={0.5}
            />
        </div>
    </div>
);

const WithCustomNavigationStyles = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Custom css classes</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                css="customViewer"
                canvasCss="customCanvas"
                navigation={{
                    css: {
                        navbarWrapper: 'customWrapper',
                        zoomOutBtn: 'customPrevBtn',
                        resetZoomBtn: 'customResetBtn',
                        zoomInBtn: 'customNextBtn',
                        previousPageBtn: 'customPrevBtn',
                        pageIndicator: 'customPages',
                        nextPageBtn: 'customNextBtn',
                        rotateLeftBtn: 'customPrevBtn',
                        resetRotationBtn: 'customResetBtn',
                        rotateRightBtn: 'customNextBtn'
                    }
                }}
            />
        </div>
    </div>
);

const WithCustomNavigation = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Custom navigation</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                css="customViewer"
                navigation={CustomNavigation}
            />
        </div>
    </div>
);

const WithOnDocumentClick = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">
            With onDocumentClick, onPrevBtnClick, onNextBtnClick, onZoom and
            onRotation handler
        </h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                onDocumentClick={() => alert('Document was clicked')}
                onPrevBtnClick={page => alert(`Page ${page} selected`)}
                onNextBtnClick={page => alert(`Page ${page} selected`)}
                onZoom={scale => alert(`Zoom scale is ${scale}`)}
                onRotation={angle => alert(`Page angle is ${angle}`)}
            />
        </div>
    </div>
);

const WithoutNavigation = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Without Navigation</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                hideNavbar
            />
        </div>
    </div>
);

const WithoutZoomRotation = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">
            Without Zoom and Rotation
        </h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                hideZoom
                hideRotation
            />
        </div>
    </div>
);

const WithNavbarTop = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">Navigation Bar on top</h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                navbarOnTop
            />
        </div>
    </div>
);

export default () => (
    <div className="container">
        <div className="row my-5">
            <FromUrl />
        </div>
        <div className="row my-5">
            <FromBase64 />
        </div>
        <div className="row my-5">
            <WithCustomLoader />
        </div>
        <div className="row my-5">
            <WithCustomStartingPage />
        </div>
        <div className="row my-5">
            <WithCustomScale />
        </div>
        <div className="row my-5">
            <WithCustomNavigationStyles />
        </div>
        <div className="row my-5">
            <WithCustomNavigation />
        </div>
        <div className="row my-5">
            <WithOnDocumentClick />
        </div>
        <div className="row my-5">
            <WithoutNavigation />
        </div>
        <div className="row my-5">
            <WithoutZoomRotation />
        </div>
        <div className="row my-5">
            <WithNavbarTop />
        </div>
    </div>
);
