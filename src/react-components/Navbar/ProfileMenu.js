import React from 'react';
import Actions from '../../actions';

class ProfileMenu extends React.Component {
    constructor(){
        super();
        this.state = {
          showProfileNav: false
        };
    }
    
    handleClick = () => {
        if(this.state.showProfileNav){
            this.setState({
                showProfileNav : false
            });
        } else {
            this.setState({
                showProfileNav: true
            });
        }
    }
    
    renderProfileNav(){
        return(
            <nav className="profile-nav" ref="profileNav">
                <a href="#">My Profile</a>
                <a href="#" onClick={this.handleLogout}>Logout</a>
            </nav>    
        );
    }
    
    render(){
        return(
            <section className="profile-menu">
            {
              
            }
            </section>
        );
    }
    
}

export default ProfileMenu;