import React from 'react'
import PropTypes from 'prop-types'

const PagesIndicator = ({ css, page, pages }) => {
  const pagesClass =
    css ||
    'is-size-7 is-vcentered has-text-centered is-inline-flex has-padding-top-5 button is-black is-marginless has-margin-left-5 has-margin-right-5'

  return <span className={pagesClass}>{`Page ${page} / ${pages}`}</span>
}

PagesIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
}

export default PagesIndicator
