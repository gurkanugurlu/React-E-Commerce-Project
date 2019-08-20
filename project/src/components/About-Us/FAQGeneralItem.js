import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const FAQGeneralItem = props => (
<div className="FAQGeneral__item-container">
    <div className="FAQGeneral__item">
    <div className="FAQGeneral__item--icon FAQGeneral__item--icon-question">
    <FontAwesomeIcon icon={props.questionIcon} size="3x" />
    </div>
    <div className="FAQGeneral__item--content">
    {props.question}
    </div>
    </div>
    <div className="FAQGeneral__item">
    <div className="FAQGeneral__item--icon FAQGeneral__item--icon-check">
    <FontAwesomeIcon icon={props.answerIcon} size="3x" />
    </div>
    <div className="FAQGeneral__item--content">
    {props.answer}
    </div>
    </div>
    </div>
)

export default FAQGeneralItem;