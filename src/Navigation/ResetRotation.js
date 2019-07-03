import React from 'react';
import PropTypes from 'prop-types';

const ResetRotation = ({ css, rotationAngle, handleResetRotation }) => {
    const resetRotationClass = `
    ${css ? css : 'btn btn-sm btn-link text-white px-2'}
    ${rotationAngle === 0 || rotationAngle === 360 ? ' disabled' : ''}
  `;

    return (
        <button
            type="button"
            className={resetRotationClass}
            onClick={handleResetRotation}>
            <i className="material-icons">refresh</i>
        </button>
    );
};
ResetRotation.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleResetRotation: PropTypes.func.isRequired
};

export default ResetRotation;
