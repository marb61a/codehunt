import React from 'react';
import Popup from '../Navbar/Popup';
import Upvote from './Upvote';
import connectToStores from 'alt-utils/lib/connectToStores';
import ProductStore from '../../stores/ProductStore';
import Actions from '../../actions';

class ProductPopup extends React.Component{
    constructor() {
        super();
    }
    
    static getStores() {
        return [ProductStore];
    }
    
    render(){
        return(
            <Popup>
            
            </Popup>            
        );
    }
}

export default ProductPopup;