import React from 'react';
import foto from '../../styles/img/ayakkabı-foto.jpg';
import defaultAxios from '../../api/defaultServer'

class ProductDetail extends React.Component {
    state = { data: null }
    async componentDidMount() {
        const answer = await defaultAxios.get('/products');
        let ans = answer.data.data.find((item) => {
            return item.id === this.props.match.params.id;
        })
        this.setState(() => {
            return {
                data: ans
            }
        })

    }
    render() {
        return (
            <section className="product">
                <div className="product__container" >
                    <div className="product__container-item1">
                        <div className="product__container-item--photo" >
                            <img src={foto} alt="Ayakkabı-Fotograf" />

                        </div>
                    </div>
                    <div className="product__container-item2">
                        <div className="product__container-item--overview">
                            <h2 className="product__container-item--overview--header">overview</h2>

                            {this.state.data &&
                                <div className="product__container-item--overview--content" > 
                                <h2 className="product__container-item--overview--content--header add-border">General Features</h2>
                                <div> 
                                <p><span className="product__container-item--header">Id</span>:{this.state.data.id}</p>
                                <p><span className="product__container-item--header">Product Name</span>:{this.state.data.productName}</p>
                                <p><span className="product__container-item--header">StockCount</span>:{this.state.data.stockCount}</p>
                                <p><span className="product__container-item--header">Price</span>:{this.state.data.price}</p>
                                <h2 className="product__container-item--overview--content--header add-border">Description</h2>
                                <p>{this.state.data.description}</p>
                                <h2 className="product__container-item--overview--content--header add-border">Instruction For Use</h2>
                                <p>{this.state.data.instructionForUse} </p>
                                </div>
                                </div>
                            }



                        </div>
                    </div>
                </div>

            </section>
        )
    }
}


export default ProductDetail;
