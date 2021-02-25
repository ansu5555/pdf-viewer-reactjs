import React from 'react'
import PropTypes from 'prop-types'

const PageIndicator = ({ css, page, pages }) => {
  const pagesClass = css || 'is-size-7 has-text-centered my-0 mx-3'

  return <span className={pagesClass}>{`Page ${page} / ${pages}`}</span>
}

PageIndicator.propTypes = {
  css: PropTypes.string,
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
}

export default PageIndicator
