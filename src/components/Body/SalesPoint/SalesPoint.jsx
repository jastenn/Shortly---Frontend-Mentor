import React from 'react'
import './SalesPoint.css'
import PropTypes from 'prop-types'


const SalesPoint = ({salesPointCards, salesPointHeading}) => {
    return (
        <div className="salespoints container">
            <div className="salespoints__heading">
                <h1 className="sp-heading__primary-heading">{salesPointHeading.mainHeading}</h1>
                <p className="sp-heading__sub-heading">
                    {salesPointHeading.subHeading}
                </p>
            </div>
            <div className="salespoints__cards">
            {salesPointCards.map(curSalesPoint => {
                return (
                    <div className={`sp-card sp-card-${curSalesPoint.id}`} key={curSalesPoint.id}>
                        <i className="sp-card__illustration-container">
                            <img src={curSalesPoint.cardImg} alt={`${curSalesPoint.carHeading} Icon`} />
                        </i>
                        <div className="sp-card__content">
                            <h3 className="sp-card__heading">{curSalesPoint.cardHeading}</h3>
                            <p className="sp-card__text">
                                {curSalesPoint.cardText}
                            </p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

SalesPoint.propTypes = {
    salesPointCards: PropTypes.array.isRequired,
    salesPointHeading: PropTypes.object.isRequired,
}

export default SalesPoint
