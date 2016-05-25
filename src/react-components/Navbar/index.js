import React from 'react';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
          popupStatus: false
        };
    }
    
    showPopup = () => {
        this.setState({popupStatus: true});
    };
    
    hidePopup = () => {
        this.setState({popupStatus: false});
    };
    
    renderLogo() {
        return (
            <a href="#"><img src="/img/favicon.ico"/></a>
        );
    }
    
    renderUser(){
        return(
            <section>
            
            </section>
        );
    }
    
    render(){
        return(
            <section>
                <section className="navbar">
                
                </section>
            </section>    
        );
    }
}

export default Navbar;