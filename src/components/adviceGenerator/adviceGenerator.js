import React from "react";
import dividerDesktop from '../../images/pattern-divider-desktop.svg'
import dividerMobile from '../../images/pattern-divider-mobile.svg'
import dice from '../../images/icon-dice.svg'

const AdviceGenerator = () => {
    return (
        <div className="advice">
            <h2 className="advice-id"></h2>
            <p className="advice-description"></p>
            <picture>
                <source srcSet={dividerMobile} media="(max-width:800px)"></source>
                <img src={dividerDesktop} alt="pattern divider"></img>
            </picture>
            <button>
                <img src={dice} alt="Dice icon"></img>
            </button>
        </div>
    )
}

export default AdviceGenerator