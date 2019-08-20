import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const FAQItem=props =>(
    <div className="FAQ__options-container-item-container">
                    <div className={props.value ?"FAQ__options-container-item FAQ__options-container-item-container--active":"FAQ__options-container-item"} onClick={()=>{props.itemOnClick(props.id)}}>
                        <div className="FAQ__options-container-item-icon">
                            <FontAwesomeIcon icon={props.icon}  size="6x" color={props.value ? "white":"black"} />
                        </div>
                        <h2 className={props.value ? "FAQ__header--item FAQ__header--item--active":"FAQ__header--item "}>
                        <span className="FAQ__header--main">{props.headerMain}</span>
                            <span className="FAQ__header--sub"> {props.headerSub}</span>
                        </h2>
                        </div>
                    </div>
)

export default FAQItem;
