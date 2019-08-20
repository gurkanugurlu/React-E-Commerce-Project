import React from 'react';
import OurStory from './OurStory';
import FAQ from './FAQ';
import MessageFromCeo from './MessageFromCeo';
import Location from './Location';
class AboutUs extends React.Component {

    state = { content: "", isAboutBestBuy : false, isMessageFromCeo:false,isLocation:false,isFAQ:false }

    componentDidMount(){
        this.itemOnClick(2)
    }
    itemOnClick = (id, selectedItemRef) => {
        switch (id) {
            default:
                break;
            case 1:
                    
                this.setState((item) => {
                    
                    return {
                        content: <OurStory />,
                        isAboutBestBuy:true,
                        isMessageFromCeo:false,
                        isFAQ:false,
                        isLocation:false
                    }
                })
               
                break;
            case 2:
                this.setState((item) => {
                     
                    return {
                        content: <FAQ />,
                        isAboutBestBuy:false,
                        isMessageFromCeo:false,
                        isFAQ:true,
                        isLocation:false
                    }
                })
            
                break;
            case 3:
                this.setState((item) => {
                    
                    return {
                        content: <MessageFromCeo />,
                        isAboutBestBuy:false,
                        isMessageFromCeo:true,
                        isFAQ:false,
                        isLocation:false
                    }
                })
               
                break;
            case 4:
                this.setState((item) => {
                   
                    return {
                        content: <Location />,
                        isAboutBestBuy:false,
                        isMessageFromCeo:false,
                        isFAQ:false,
                        isLocation:true
                    }
                   
                })
                
                break;

        }


    }
    render() {
        return (
            <section className="about-us">
                <div className="about-us__header">
                    About
        </div>
                <div className="about-us-container">
                    <div className="about-us__img-container" >
                        <h1 className="about-us-img-header">
                            <span className="about-us-img-header--main">Welcome</span>
                            <span className="about-us-img-header--sub"> </span>
                            <span className="about-us-img-header--description">Since 1998 we provides best products on internet. Cheap,safe and you can refund your product in 30 days... </span>
                        </h1>
                    </div>

                </div>
                <div className="about-us-info">
                    <div className="about-us-info-container">
                        <span ref={this.itemRef} className={this.state.isAboutBestBuy ?"about-us-info__item about-us-info__item--active":"about-us-info__item"} onClick={(e) => this.itemOnClick(1)}>About BestBuy</span>
                        <span ref={this.itemRef2} className={this.state.isFAQ ?"about-us-info__item about-us-info__item--active":"about-us-info__item"} onClick={(e) => this.itemOnClick(2)}>FAQ</span>
                        <span ref={this.itemRef3} className={this.state.isMessageFromCeo ?"about-us-info__item about-us-info__item--active":"about-us-info__item"} onClick={(e) => this.itemOnClick(3)}>Message from Ceo</span>
                        <span ref={this.itemRef4} className={this.state.isLocation ?"about-us-info__item about-us-info__item--active":"about-us-info__item"} onClick={(e) => this.itemOnClick(4)}>Location</span>
                    </div>
                    {this.state.content !== null ? this.state.content : ""}
                </div>
                
            </section>
        )
    }
}
export default AboutUs;
