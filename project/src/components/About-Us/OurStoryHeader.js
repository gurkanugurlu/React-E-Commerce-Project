import React from 'react';
import ScrollMagic from 'scrollmagic';
import SlidingText from '../Other-Components/SlidingText';


class OurStoryHeader extends React.Component {
    constructor(props) {
        super(props);
        this.headerRef = React.createRef();
    }

    componentDidMount() {
        const controller = new ScrollMagic.Controller();
        new ScrollMagic.Scene({
            duration: '200%',
            triggerElement: this.headerRef.current,
            triggerHook: 0,

        }).setPin(this.headerRef.current).addTo(controller);
    }
    render() {

        return (
            <div ref={this.headerRef} className="about-us__item-about-best-buy-header-container">
            <h2 className="about-us__item-about-best-buy-header " >
            <SlidingText text="Our Story"/>
           </h2>
           </div>
        )
    }
}

export default OurStoryHeader;
