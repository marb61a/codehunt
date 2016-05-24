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
    
    render(){
        return(
            <li className="product-item">
                    
            </li> 
        );
    }
}

export default ProductItem;