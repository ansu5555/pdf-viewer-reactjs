import React from 'react';
import PropTypes from 'prop-types';

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = `
    ${css ? css : 'btn btn-sm btn-link pr-0 mr-n3 text-white'}
    ${page === 1 ? ' disabled' : ''}
  `;

    return (
        <button className={prevClass} onClick={handlePrevClick}>
            <i className="material-icons">keyboard_arrow_left</i>
        </button>
    );
};
PreviousPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired
};

export default PreviousPageButton;
