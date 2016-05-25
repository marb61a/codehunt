import alt from '../alt';
import Firebase from 'firebase';
import _ from 'lodash';

class Actions {
    initSession(){
        return(dispatch) => {
            var firebaseRef = new Firebase('');
            var authData = firebaseRef.getAuth();
            var user;
            
            if(authData){
                user = {
                    id: authData.facebook.id,
                    name: authData.facebook.displayName,
                    avatar: authData.facebook.profileImageURL
                };                
            } else{
                user = null;                
            }
            
            setTimeout(() => dispatch(user));
        };
    }
}

export default alt.createActions(Actions);