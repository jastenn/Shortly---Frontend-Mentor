import React from 'react'
import './MainCta.css'
import PropTypes from 'prop-types'

const MainCta = ({innerText, link, padding, fontSize, borderRadius}) => {
    const mainCtaStyles = {
        padding,
        fontSize,
        borderRadius
    }
    return (
        //eslint-disable-next-line
        <a href={link} style={mainCtaStyles} className="main-cta">
            {innerText}
        </a>
    )
}

MainCta.defaultProps = {
    link: '#',
    padding: '.5em 1.75em',
    borderRadius: '5em',
    fontSize: '1rem',
}

MainCta.propTypes = {
    innerText: PropTypes.string.isRequired,
}


export default MainCta
