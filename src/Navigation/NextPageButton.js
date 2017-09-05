import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const NextPageButton = ({ css, page, pages, handleNextClick }) => {
  const nextClass = `
    ${css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--next'}
    ${page === pages ? ' mgrpdf-navigation__controls--disabled' : ''}
  `;

  return (
    <div className={nextClass} style={css ? {} : styles.next} onClick={handleNextClick}>
      <a>{'>'}</a>
    </div>
  );
};
NextPageButton.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  handleNextClick: PropTypes.func.isRequired
};

export default NextPageButton;
