import { combineReducers, applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers'
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducers';

const reducer = combineReducers({
    cart: cartReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;