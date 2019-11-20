import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NextPageButton = ({ css, page, pages, handleNextClick }) => {
    const nextClass = `${css || 'btn btn-sm btn-link text-white pl-2'}${
        page === pages ? ' disabled' : ''
    }`

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(true)
        handleNextClick()
        setTimeout(() => {
            setState(false)
        }, 500)
    }

    return (
        <button className={nextClass} onClick={handleClick} disabled={state}>
            <i className='material-icons'>keyboard_arrow_right</i>
        </button>
    )
}
NextPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    handleNextClick: PropTypes.func.isRequired,
}

export default NextPageButton
