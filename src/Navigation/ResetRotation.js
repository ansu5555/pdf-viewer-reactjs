import React from 'react';
import PropTypes from 'prop-types';
import ResetIcon from '../icons/Reset'
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
            <ResetIcon/>
        </button>
    );
};
ResetRotation.propTypes = {
    css: PropTypes.string,
    rotationAngle: PropTypes.number.isRequired,
    handleResetRotation: PropTypes.func.isRequired
};

export default ResetRotation;
