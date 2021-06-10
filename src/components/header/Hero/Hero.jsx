import React from 'react'
import MainCta from '../../Button/MainCta'
import HeroImg from '../../../img/illustration-working.svg'
import './hero.css'

const Hero = ({primaryHeading, introContent}) => {
    return (
        <div className="intro">
            <div className="intro__img-container"><img className="intro__img" src={HeroImg} alt="Illustration, working through his computer" /></div>
            <div className="intro__content">
                <h1 className="content__heading--900">{primaryHeading}</h1>
                <p className="content__subheading">{introContent}</p>
                <MainCta innerText="Get Started" padding=".3em 1.75em" fontSize="1.25rem"/>
            </div>
        </div>
    )
}

Hero.defaultProps = {
    primaryHeading: 'More than just shorter links',
    introContent: 'Build your brand’s recognition and get detailed insights on how your links are performing.'
}
export default Hero
