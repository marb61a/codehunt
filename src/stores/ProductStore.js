import alt from '../alt';
import Actions from '../actions';

class ProductStore{
    constructor() {
    this.state = {
      user: null,
      products: [],
      comments: []
    };
  }
  
}

export default alt.createStore(ProductStore);