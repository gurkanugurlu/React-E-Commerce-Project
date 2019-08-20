import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
const OurStoryContent = props => {
    return (
        <ScrollAnimation animateIn='fadeIn' >
            <div className="about-best-buy-item">
                <p className="about-best-buy-item__content">{props.content} </p>
            </div>
        </ScrollAnimation>
    )
}

export default OurStoryContent;
