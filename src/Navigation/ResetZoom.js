import React from 'react';
import PropTypes from 'prop-types';

const ResetZoom = ({ css, handleResetZoom }) => {
    const resetZoomClass = css ? css : 'btn btn-sm btn-link text-white px-2';

    return (
        <button
            type="button"
            className={resetZoomClass}
            onClick={handleResetZoom}>
            <i className="material-icons">youtube_searched_for</i>
        </button>
    );
};

ResetZoom.propTypes = {
    css: PropTypes.string,
    handleResetZoom: PropTypes.func.isRequired
};

export default ResetZoom;
