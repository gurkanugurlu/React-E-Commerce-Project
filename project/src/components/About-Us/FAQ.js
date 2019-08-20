import React from 'react';
import FAQItem from './FAQItem';
import FAQGeneral from './FAQGeneral';
import { faSearch,faMoneyCheck, faBox , faChartPie} from '@fortawesome/free-solid-svg-icons';
import PaymentGeneral from './PaymentGeneral';
import RefundGeneral from './RefundGeneral';
import OtherGeneral from './OtherGeneral'
class FAQ extends React.Component {
    state = { content: "", isGeneral: false, isPayment: false, isRefund: false, isOther: false }

    componentDidMount(){
       this.itemOnClick(1);
    }
    itemOnClick = (id) => {
        switch (id) {
            default:
                break;
            case 1:
                    
                this.setState((item) => {
                    
                    return {
                        content: <FAQGeneral />,
                        isGeneral:true,
                        isPayment:false,
                        isRefund:false,
                        isOther:false
                    }
                })
               
                break;
            case 2:
                this.setState((item) => {
                     
                    return {
                        content:<PaymentGeneral />,
                        isGeneral:false,
                        isPayment:true,
                        isRefund:false,
                        isOther:false
                    }
                })
            
                break;
            case 3:
                this.setState((item) => {
                    
                    return {
                        content: <RefundGeneral />,
                        isGeneral:false,
                        isPayment:false,
                        isRefund:true,
                        isOther:false
                    }
                })
               
                break;
            case 4:
                this.setState((item) => {
                   
                    return {
                        content: <OtherGeneral />,
                        isGeneral:false,
                        isPayment:false,
                        isRefund:false,
                        isOther:true
                    }
                   
                })
                
                break;

        }


    }

    render() {
        return (
            <section className="FAQ">
                <h2 className="FAQ__header">Frequently Asked Questions (FAQ)</h2>
                <div className="FAQ__options-container">
                    <FAQItem itemOnClick={this.itemOnClick} value={this.state.isGeneral} id={1} icon={faSearch} headerMain="General" headerSub="FAQ"/>
                    <FAQItem itemOnClick={this.itemOnClick} value={this.state.isPayment} id={2} icon={faMoneyCheck} headerMain="Payment" headerSub="FAQ" />
                    <FAQItem itemOnClick={this.itemOnClick} value={this.state.isRefund} id={3}  icon={faBox} headerMain="Refund" headerSub="FAQ" />
                    <FAQItem itemOnClick={this.itemOnClick} value={this.state.isOther} id={4} icon={faChartPie} headerMain="Other" headerSub="FAQ" />
                </div>
                {this.state.content !== null ? this.state.content : ""}
            </section>
        )
    }
}

export default FAQ;