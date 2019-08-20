import React from 'react';
import {Link} from 'react-router-dom';
class Page404 extends React.Component {
    state = { count: 0 }

    componentDidMount(){
        this.increaseCount();
    }
    increaseCount=() => {
        setTimeout(()=>{
            this.setState((prevState)=>{
                    return {
                        count:prevState.count+1
                    }
            })
        },0.7);
    }
    componentDidUpdate(prevState){
        if(this.state.count!==404){
            this.increaseCount();
        }
    }
    render() {

        return (<section className="page-404">
            <div className="page-404__container">
                <div className="page-404__container--header--container">
                <div className="page-404__container--header" >
                    {this.state.count}
                    </div>
                    <div className="page-404__container--content" >
                   The page you are looking for was moved or removed, renamed or never existed :). <Link to="/"   className="btn btn-secondary">Go Home</Link>
                    </div>
                </div>

            </div>

        </section>
        )
    }
}

export default Page404;
