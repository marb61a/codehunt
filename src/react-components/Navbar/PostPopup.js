import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class PostPopup extends React.Component {
    handlePost = () => {
      var newProduct = {
        name: this.refs.name.value,
        link: this.refs.link.value,
        description: this.refs.description.value,
        media: this.refs.media.value,
        upvote: 0,
        maker: {
          name: this.props.user.name,
          avatar: this.props.user.avatar
        }
      };
      
      Actions.addProduct(newProduct);
    }
    
    render(){
        return(
          <Popup  {...this.props} style="post-popup">
            <header className="post-header">Post a new product</header>
            <section>
              <table>
                <tbody>
                
                </tbody>
              </table>
            </section>
            <footer className="post-footer">
              <button onClick={this.handlePost} className="post-btn">
                Hunt It!
              </button>
            </footer>
          </Popup>  
        );
    }
}

export default PostPopup;