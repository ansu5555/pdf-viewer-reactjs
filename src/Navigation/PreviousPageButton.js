import React from 'react';
import PropTypes from 'prop-types';
import PrevIcon from '../icons/Prev'
const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = `
    ${css ? css : 'btn btn-sm btn-link text-white pr-2'}
    ${page === 1 ? ' disabled' : ''}
  `;

    return (
        <button className={prevClass} onClick={handlePrevClick}>
            <PrevIcon/>
        </button>
    );
};
PreviousPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired
};

export default PreviousPageButton;
