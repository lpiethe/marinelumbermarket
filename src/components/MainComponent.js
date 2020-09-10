import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './HeaderComponent';
import Home from './HomePageComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Product from './ProductComponent';
import Contact from './ContactComponent';

class Main extends Component {
    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        }
        return (
            <Router>
                <div>
                <Header/>
                <Switch>
                    <Route exact path="/About" component={About}/>  
                    <Route exact path="/Product" component={Product}/>
                    <Route exact path="/Contact" component={Contact}/> 
                    <Route exact path="/" component={Home}/> 
                </Switch>
        
                <Footer/>
                </div>
            </Router>
        );
    }
}

export default Main;