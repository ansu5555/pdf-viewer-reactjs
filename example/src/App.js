import React from 'react';
import CustomNavigation, {
    CustomPrevButton,
    CustomNextButton,
    CustomPages
} from './Navigation';

import PDFViewer from 'pdf-viewer-reactjs';
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
                scale={0.5}
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
                navigation={{
                    css: {
                        previousPageBtn: 'customPrevBtn',
                        nextPageBtn: 'customNextBtn',
                        pages: 'customPages',
                        wrapper: 'customWrapper'
                    }
                }}
            />
        </div>
    </div>
);

const WithCustomNavigationElements = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">
            Custom navigation elements
        </h1>
        <div className="border rounded">
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

class WithDynamicScale extends React.Component {
    state = {
        scale: 1.0
    };

    increaseScale = () =>
        this.setState(({ scale }) => ({ scale: scale + 0.1 }));
    decreaseScale = () =>
        this.setState(({ scale }) => ({ scale: scale - 0.1 }));

    render() {
        return (
            <div className="col-md-auto text-center">
                <h1 className="text-white bg-info rounded">Dynamic scale</h1>
                <button onClick={this.decreaseScale}>-</button>
                <span>Scale: {this.state.scale}</span>
                <button onClick={this.increaseScale}>+</button>
                <div className="border rounded">
                    <PDFViewer
                        document={{
                            url: sources.url
                        }}
                        scale={this.state.scale}
                    />
                </div>
            </div>
        );
    }
}

const WithOnDocumentClick = () => (
    <div className="col-md-auto text-center">
        <h1 className="text-white bg-info rounded">
            With onDocumentClick handler
        </h1>
        <div className="border rounded">
            <PDFViewer
                document={{
                    url: sources.url
                }}
                onDocumentClick={() => alert('Document was clicked')}
                css="customViewer"
                navigation={CustomNavigation}
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
                css="customViewer"
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
            <WithDynamicScale />
        </div>
        <div className="row my-5">
            <WithCustomNavigationStyles />
        </div>
        <div className="row my-5">
            <WithCustomNavigationElements />
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
    </div>
);
