import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
class SlidingText extends React.Component {

    renderText() {
        const slidingText = this.props.text;
        const textLength = this.props.text.length;
        const answer = [];
        let delay = 0;
        let delayRate= this.props.delayRate || 100;
        for (let i = 0; i < textLength; i++) {
            delay = delay + delayRate;
            answer.push(
                <ScrollAnimation key={i} animateIn='fadeIn' animateOnce={true} delay={delay}>
                    <h2>{slidingText.charAt(i) === " " ? <span className="about-us__space"></span> : slidingText.charAt(i)}</h2>
                </ScrollAnimation>)
        }
        return answer;

    }
    render() {
        return (
            this.renderText()
        )
    }
}

export default SlidingText;