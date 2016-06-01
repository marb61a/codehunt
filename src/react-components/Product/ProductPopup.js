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
    
    static getPropsFromStores(){
        return ProductStore.getState();
    }
    
    renderHeader(){
        return(
            <header style={{backgroundImage: 'url(' + this.props.media + ')'}}>
                <section className="header-shadow">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <section>
                        <Upvote {...this.props}/>
                        <a className="getit-btn" href={this.props.link} target="_blank">Get It</a>
                    </section>
                </section>
            </header>    
        );
    }
    
    renderBodyDiscussion(){
        return(
            <section className="discussion">
                <h2>Discussion</h2>
                {
                    
                }
            </section>
        );
    }
    
    renderBody(){
        return (
            <section className="product-popup-body">
                <main>
                    {this.renderBodyDiscussion()}
                </main>
            </section>
        );
    }
    
    renderComments(){
        return(
            <ul className="comment-list">
                {
                    
                }
            </ul>
        );
    }
    
    render(){
        return(
            <Popup>
            
            </Popup>            
        );
    }
}

export default ProductPopup;