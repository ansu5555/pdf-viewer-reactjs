import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = css || 'button is-black'

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(true)
        handlePrevClick()
        setTimeout(() => {
            setState(false)
        }, 200)
    }

    if (state || page === 1) {
        return (
            <button className={prevClass} disabled>
                <i className='material-icons'>keyboard_arrow_left</i>
            </button>
        )
    }

    return (
        <button className={prevClass} onClick={handleClick}>
            <i className='material-icons'>keyboard_arrow_left</i>
        </button>
    )
}
PreviousPageButton.propTypes = {
    css: PropTypes.string,
    page: PropTypes.number.isRequired,
    handlePrevClick: PropTypes.func.isRequired,
}

export default PreviousPageButton
