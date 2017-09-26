import React from 'react';
import PropTypes from 'prop-types';
import NextPageButton from './NextPageButton';
import PagesIndicator from './PagesIndicator';
import PreviousPageButton from './PreviousPageButton';
import styles from '../styles';

const Navigation = ({ page, pages, css, elements, handlePrevClick, handleNextClick }) => {
  let prevEl, nextEl, pagesEl;
  if (elements.previousPageBtn) {
    prevEl = <elements.previousPageBtn page={page} pages={pages} handlePrevClick={handlePrevClick} />;
  } else {
    prevEl = <PreviousPageButton css={css.previousPageBtn} page={page} pages={pages} handlePrevClick={handlePrevClick} />;
  }

  if (elements.nextPageBtn) {
    nextEl = <elements.nextPageBtn page={page} pages={pages} handleNextClick={handleNextClick} />;
  } else {
    nextEl = <NextPageButton css={css.nextPageBtn} page={page} pages={pages} handleNextClick={handleNextClick} />;
  }

  if (elements.pages) {
    pagesEl = <elements.pages page={page} pages={pages} />;
  } else {
    pagesEl = <PagesIndicator css={css.pages} page={page} pages={pages} />;
  }

  const wrapperClass = css.wrapper ? css.wrapper : 'mgrpdf-navigation mgrpdf-navigation__controls mgrpdf-navigation__controls--wrapper';

  return (
    <div className={wrapperClass} style={css.wrapper ? {} : styles.wrapper}>
      {prevEl}
      {pagesEl}
      {nextEl}
    </div>
  );
};

Navigation.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,

  css: PropTypes.shape({
    previousPageBtn: PropTypes.string,
    nextPageBtn: PropTypes.string,
    pages: PropTypes.string,
    wrapper: PropTypes.string
  }),
  elements: PropTypes.shape({
    previousPageBtn: PropTypes.any,
    nextPageBtn: PropTypes.any,
    pages: PropTypes.any
  }),

  handlePrevClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
};
Navigation.defaultProps = {
  css: {},
  elements: {}
};

export default Navigation;
