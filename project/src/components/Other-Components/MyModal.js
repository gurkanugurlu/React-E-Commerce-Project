import React from 'react';
import Modal from 'react-modal';

const MyModal = (props) => {
    const sData=props.selectedData || null;
    return (<Modal isOpen={props.isModalOpen}   contentLabel="Are you Sure?"  closeTimeoutMS={75} onRequestClose={props.changeModalVisibility} ariaHideApp={false} className="my--modal">
    <h2>Are you sure to {props.operation}   {sData!==null ? sData.productName.toUpperCase() :"this item"}     ?     </h2>
        {sData!==null ? <p>(Id:{sData.id}, stockCount: {sData.stockCount} ) </p>:"" }
        
        <button onClick={(e)=> { props.onHandlerFunction(sData!== null ? sData.id:null)}} className={props.button1Cs}>{props.button1Text}</button>
        <button onClick={props.changeModalVisibility} className="my--modal__button--cancel">Cancel</button>
    </Modal>
    )
}

export default MyModal;