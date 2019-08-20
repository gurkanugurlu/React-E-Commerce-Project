import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import '../styles/styles.scss'
import Header from './Header/Header';
import MainPage from './Main-Page/MainPage';
import Products from './Products/Products';
import AboutUs from './About-Us/About-Us';
import ProductDetail from './Products/ProductDetail';
import Footer from './Footer/Footer';
import Page404 from './404/404';
import ProductEdit from './Products/ProductEdit';

const App = () => {

    return (
        <div>
            <Router history={history}>
                <div>

                    <div className="body-div">

                        <Header />
                        <Switch>
                            <Route path="/" exact component={MainPage} />
                            <Route path="/about-us" exact component={AboutUs} />
                            <Route path="/products" exact component={Products} />
                            <Route path="/products/:id" exact component={ProductDetail} />
                            <Route path="/products/edit/:id" exact component={ProductEdit} />
                            <Route component={Page404} exact />
                        </Switch>
                        
                    </div>
                    <Footer />

                </div>

            </Router>
        </div>
    )
}

export default App;
