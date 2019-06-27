import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = `
    ${css ? css : 'btn btn-sm btn-link pr-0 mr-n3 text-white'}
    ${page === 1 ? ' disabled' : ''}
  `;

    return (
        <button
            className={prevClass}
            style={prevClass ? {} : styles.previous}
            onClick={handlePrevClick}>
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
