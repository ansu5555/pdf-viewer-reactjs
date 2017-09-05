import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
  const prevClass = `
    ${css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--previous'}
    ${page === 1 ? ' mgrpdf-navigation__controls--disabled' : ''}
  `;

  return (
    <div className={prevClass} style={css ? {} : styles.previous} onClick={handlePrevClick}>
      <a>{'<'}</a>
    </div>
  );
};
PreviousPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

export default PreviousPageButton;
