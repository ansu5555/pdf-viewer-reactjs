import React from 'react';
import PropTypes from 'prop-types';

const RotateLeft = ({ css, rotationAngle, handleRotateLeft }) => {
    const rotateLeftClass = `
    ${css ? css : 'btn btn-sm btn-link text-white pr-2'}
    ${rotationAngle === -90 ? ' disabled' : ''}
  `;

    return (
        <button
            type="button"
            className={rotateLeftClass}
            onClick={handleRotateLeft}>
            <i className="material-icons">rotate_left</i>
        </button>
    );
};

RotateLeft.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleRotateLeft: PropTypes.func.isRequired
};

export default RotateLeft;
