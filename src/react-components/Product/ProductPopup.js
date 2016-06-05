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
    
    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.status && this.props.status != nextProps.status){
            Actions.getComments(this.props.pid);    
        }
        
        return true;
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
    
    handleComment = (e) => {
        if(e.keyCode === 13 && e.target.value.length > 0){
            var comment = {
                content: e.target.value,
                name: this.props.user.name,
                avatar: this.props.user.avatar
            };
            
            Actions.addComment(this.props.pid, comment);
            e.target.value = null;

        }
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