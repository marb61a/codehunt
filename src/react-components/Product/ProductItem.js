import React from 'react';
import ProductPopup from './ProductPopup';
import Upvote from './Upvote';

class ProductItem extends React.Component{
    constructor(){
        super();
        this.state = {
          productPopupStatus: false
        };
    }
    
    showProductPopup = () => {
        this.setState({
            productPopupStatus: true
        });
    }
    
    hideProductPopup = () => {
        this.setState({
            productPopupStatus: false
        });
    }
    
    renderInfoSession(){
        
    }
    
    render(){
        return(
            <li className="product-item">
                    
            </li> 
        );
    }
}

export default ProductItem;