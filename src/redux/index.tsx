import {  applyMiddleware, createStore, combineReducers, compose  } from 'redux';
import thunk from "redux-thunk";
import { tokenReducer } from './reducers/token/token';
import { productReducer } from './reducers/product/product';

const rootReducer  = () => combineReducers({
    product: productReducer,
    token: tokenReducer,
});
const configureStore = () => {
    const middlewares = [thunk];
	const composeEnhancers = compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer(), enhancers);

	return store;
}
export default configureStore;
