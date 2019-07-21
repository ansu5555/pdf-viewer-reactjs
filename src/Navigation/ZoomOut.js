import React from 'react';
import PropTypes from 'prop-types';
import ZoomOutIcon from '../icons/ZoomOut'


const ZoomOut = ({ scale, css, handleZoomOut }) => {
    const zoomOutClass = `${css ? css : 'btn btn-sm btn-link text-white pr-2'}${
        scale === 1 ? ' disabled' : ''
    }`;

    return (
        <button type="button" className={zoomOutClass} onClick={handleZoomOut}>
            <ZoomOutIcon/>
        </button>
    );
};

ZoomOut.propTypes = {
    css: PropTypes.string,
    handleZoomOut: PropTypes.func.isRequired
};

export default ZoomOut;
