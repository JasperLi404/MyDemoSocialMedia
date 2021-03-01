import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import userReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";
import { createStore, applyMiddleware, compose } from 'redux';
import newsReducer from "./news-reducer";

const {combineReducers} = require("redux");
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sitebar: sitebarReducer,
    usersPage: userReducer,
    form: formReducer,
    auth: authReducer,
    app: appReducer,
    news: newsReducer
});


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(  applyMiddleware(thunkMiddleware)));
 
// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;