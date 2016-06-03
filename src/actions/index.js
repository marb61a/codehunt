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
    
    login(){
        return(dispatch) =>{
            var firebaseRef = new Firebase('');
            firebaseRef.authWithOAuthPopup('facebook', (error, authData) => {
            if (error) {
              return;
            }
            
            var user = {
              id: authData.facebook.id,
              name: authData.facebook.displayName,
              avatar: authData.facebook.profileImageURL
            };
            
            firebaseRef.child("users").child(authData.facebook.id).set(user);
            dispatch(user);
          });
          
        };
    }
    
    logout(){
        return(dispatch) => {
            var firebaseRef = new Firebase('');
            firebaseRef.unauth();
            setTimeout(() => dispatch(null));
        };
    }
    
    getProducts(){
        return(dispatch) => {
            var firebaseRef = new Firebase('');
            firebaseRef.on('value', (snapshop) => {
                var productsValue = snapshop.val();
                var products = _(productsValue).keys().map((productKey) => {
                    var item = _.clone(productsValue[productKey]);
                    item.key = productKey;
                    return item;
                })
                .value();
                dispatch(products);
            });
        };
    }
    
    addVote(productId, userId) {
        return(dispatch ) => {
            var firebaseRef = new Firebase('');
            var voteRef = firebaseRef.child('votes').child(productId).child(userId);
            voteRef.on('value', (snapshop) => {
                if(snapshop.val == null){
                    voteRef.set(true);
                    firebaseRef = firebaseRef.child('products').child(productId).child('upvote');
                    var vote = 0;
                    firebaseRef.on('value', (snapshop)=> {
                        vote = snapshop.val();
                    });
                    firebaseRef.set(vote+1);
                }
            });
        };
    }
}

export default alt.createActions(Actions);