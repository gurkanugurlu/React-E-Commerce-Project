import React from 'react';
import { faQuestionCircle,faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import FAQGeneralItem from './FAQGeneralItem';

const content="Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek'.";
const OtherGeneral= () => (
<div className="FAQGeneral">
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />
    <FAQGeneralItem question={content} answer={content} questionIcon={faQuestionCircle} answerIcon={faCheckSquare} />

</div>
)

export default OtherGeneral;
