import React from 'react';
import PropTypes from 'prop-types';

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = `
    ${css ? css : 'btn btn-sm btn-link text-white pr-2'}
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
