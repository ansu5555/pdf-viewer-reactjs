import React, { useState } from 'react'
import PropTypes from 'prop-types'

const PreviousPageButton = ({ css, page, handlePrevClick }) => {
    const prevClass = `${css || 'btn btn-sm btn-link text-white pr-2'}${
        page === 1 ? ' disabled' : ''
    }`

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(true)
        handlePrevClick()
        setTimeout(() => {
            setState(false)
        }, 500)
    }

    return (
        <button className={prevClass} onClick={handleClick} disabled={state}>
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
