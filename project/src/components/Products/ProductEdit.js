import React from 'react';
import defaultAxios from '../../api/defaultServer'
import history from '../../history';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Other-Components/MyModal';
class ProductEdit extends React.Component {
    state = { id: "", productName: "", stockCount: "", price: "", description: "", instructionForUse: "",isModalOpen:false }

    changeModalVisibility=() =>{
        this.setState((prevState)=>{
           return{ isModalOpen:!prevState.isModalOpen
           }
        })
    }

    async componentDidMount() {
        const answer = await defaultAxios.get(`/products/${this.props.match.params.id}`);
        this.setState(() => {
            return {
                id: answer.data.data.id,
                productName: answer.data.data.productName,
                stockCount: answer.data.data.stockCount,
                price: answer.data.data.price,
                description: answer.data.data.description,
                instructionForUse: answer.data.data.instructionForUse
            }
        })

    }

    handleChange = (id, value) => {
        switch (id) {
            case 1:
                this.setState(() => {
                    return {
                        productName: value
                    }
                })
                break;
            case 2:
                this.setState(() => {
                    return {
                        stockCount: value
                    }
                })
                break;
            case 3:
                this.setState(() => {
                    return {
                        price: value
                    }
                })
                break;
            case 4:
                this.setState(() => {
                    return {
                        description: value
                    }
                })
                break;
            case 5:
                this.setState(() => {
                    return {
                        instructionForUse: value
                    }
                })
                break;


            default:
                break;
        }
    }
    onEditProduct = async  (e) => {
        e.preventDefault();
        this.setState(()=>{
          return{
            isModalOpen:true
          }
        })
    }
    onSaveProduct=async ()=> {
        console.log("Its on")
        const produceTempObject = {
            id: this.state.id,
            productName: this.state.productName,
            stockCount: this.state.stockCount,
            price: this.state.price,
            description: this.state.description,
            instructionForUse: this.state.instructionForUse

        }
        await defaultAxios.patch(`/products/${this.state.id}`,produceTempObject);
       this.setState(()=>{
           return{
               isModalOpen:false
           }
       })
        history.push('/products')
    }
    render() {
        return (
            <div className="product-edit">
                <div className="product-edit__container">
                    <form className="product-edit-form" onSubmit={this.onEditProduct}>
                        <div className="product-edit-form--main-header">
                            <span className="product-edit-form--main-header--content"><FontAwesomeIcon icon={faCalendarMinus} size="2x" />   EDIT Product</span>
                        </div>
                        <div className="product-edit-form--content">
                            <label htmlFor="product-name" className="product-form-header">
                                Product name
            </label>
                            <input type="text" id="product-name" value={this.state.productName !== null ? this.state.productName : ""} onChange={(e) => this.handleChange(1, e.target.value)} />
                            <label htmlFor="stock-count" className="product-form-header">Stock Count</label>
                            <input type="number" id="stock-count" value={this.state.stockCount !== null ? this.state.stockCount : ""} onChange={(e) => this.handleChange(2, e.target.value)} />
                            <label htmlFor="price" className="product-form-header">Price</label>
                            <input type="number" id="price" value={this.state.price !== null ? this.state.price : ""} onChange={(e) => this.handleChange(3, e.target.value)} />
                            <label htmlFor="description" className="product-form-header" >Description</label>
                            <textarea id="description" value={this.state.description !== null ? this.state.description : ""} onChange={(e) => this.handleChange(4, e.target.value)} />
                            <label htmlFor="instruction-for-use" className="product-form-header" >Instruction for Use</label>
                            <textarea id="instruction-for-use" value={this.state.instructionForUse !== null ? this.state.instructionForUse : ""} onChange={(e) => this.handleChange(5, e.target.value)} />
                            <input type="submit" className="contact__button contact__button--white" value="SUBMIT" />
                        </div>
                    </form>
                </div>
                <Modal isModalOpen={this.state.isModalOpen} changeModalVisibility={this.changeModalVisibility} button1Text="Save"
          button1Cs="my--modal__button--success" onHandlerFunction={this.onSaveProduct}  operation="save" />
            </div>
        )
    }

}

export default ProductEdit;