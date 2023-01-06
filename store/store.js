
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";
import {composeWithDevTools} from 'redux-devtools-extension'
// initial states here
const initalState = {};

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(
  persistedReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);