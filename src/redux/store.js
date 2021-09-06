import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
//resoluvtion https://stackoverflow.com/questions/53514758/redux-typeerror-cannot-read-property-apply-of-undefined
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&  window.__REDUX_DEVTOOLS_EXTENSION__
	? window.__REDUX_DEVTOOLS_EXTENSION__()
	: f => f
  )
);

export default store;