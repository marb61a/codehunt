import React from 'react';
import Popup from './Popup';
import Actions from '../../actions';

class PostPopup extends React.Component {
    handlePost = () => {
        
    }
    
    render(){
        return(
          <Popup>
            <header className="post-header">Post a new product</header>
            <section>
            
            </section>
            <footer className="post-footer">
            
            </footer>
          </Popup>  
        );
    }
}

export default PostPopup;