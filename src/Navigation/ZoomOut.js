import React from 'react';
import PropTypes from 'prop-types';

const ZoomOut = ({ scale, css, handleZoomOut }) => {
    const zoomOutClass = `${css ? css : 'btn btn-sm btn-link text-white pr-2'}${
        scale === 1 ? ' disabled' : ''
    }`;

    return (
        <button type="button" className={zoomOutClass} onClick={handleZoomOut}>
            <i className="material-icons">zoom_out</i>
        </button>
    );
};

ZoomOut.propTypes = {
    css: PropTypes.string,
    handleZoomOut: PropTypes.func.isRequired
};

export default ZoomOut;
