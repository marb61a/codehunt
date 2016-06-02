import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage';
import Navbar from './Navbar';
import ProductStore from '../stores/ProductStore';
import Actions from '../actions';

class App extends React.component{
    constructor(){
        super();
        Actions.initSession();
    }
    
    static getStores() {
        return [ProductStore];
    }

    render(){
        return(
            <section>
                <Navbar user = {this.props.user}/>
                <HomePage/>
            </section>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));