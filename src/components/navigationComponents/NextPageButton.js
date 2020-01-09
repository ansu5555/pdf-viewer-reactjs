import React, { useState } from 'react'
import PropTypes from 'prop-types'

const NextPageButton = ({ css, page, pages, handleNextClick }) => {
    const nextClass = css || 'button is-black'

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(true)
        handleNextClick()
        setTimeout(() => {
            setState(false)
        }, 200)
    }

    if (state || page === pages) {
        return (
            <button className={nextClass} disabled>
                <i className='material-icons'>keyboard_arrow_right</i>
            </button>
        )
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
