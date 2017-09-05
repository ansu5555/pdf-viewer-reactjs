import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';

const PagesIndicator = ({ css, page, pages }) => {
  const pagesClass = css ? css : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--pages';

  return (
    <div className={pagesClass} style={css ? {} : styles.pages}>
      {page}/{pages}
    </div>
  );
};

PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};

export default PagesIndicator;
