import React from 'react'
import './FooterCta.css'
import MainCta from '../../Button/MainCta'
const FooterCta = ({textContent, btnPadding, btnFontSize}) => {
    return (
        <div className="footer__cta">
            <h1 className="f-cta__heading">{textContent}</h1>
            <MainCta padding={btnPadding} fontSize={btnFontSize} innerText="Get Started"/>
        </div>
    )
}

export default FooterCta
