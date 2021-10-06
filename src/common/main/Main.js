import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Products from '../../pages/products/Products';
import Contact from '../../pages/contact-us/Contact';
import "./Main.css";
export default function main(props) {
    return (
        <div className="full-height">
            <Switch>
                <Route exact path="/" render={() => <Home onUpdateCart={props.onUpdateCart}/>} ></Route>
                <Route exact path="/products" render={() => <Products onUpdateCart={props.onUpdateCart} />} ></Route>
                <Route exact path="/contact-us" render={() => <Contact />} ></Route>
                <Route exact path="**" render={() =>
                    <>
                        <div>404</div>
                        <div>Not Found</div>
                    </>
                }>
                </Route>
            </Switch >
        </div>

    )
}
