import {  applyMiddleware, createStore, combineReducers, compose  } from 'redux';
import thunk from "redux-thunk";
import { tokenReducer } from './reducers/token/token';
import { productReducer } from './reducers/product/product';

const rootReducer  = () => combineReducers({
    product: productReducer,
    token: tokenReducer,
});
// type rootReducer = typeof reducers;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

// export type RootState = ReturnType<rootReducer>;

// const store = createStore(reducers, compose(applyMiddleware(thunkMiddleware)));

const configureStore = () => {
    const middlewares = [thunk];
	const composeEnhancers = compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));
    const store = createStore(rootReducer(), enhancers);

	return store;
}
export default configureStore;
