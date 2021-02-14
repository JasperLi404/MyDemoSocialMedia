import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sitebarReducer from "./sitebar-reducer";
import userReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk';

const { createStore, combineReducers, applyMiddleware } = require("redux");
let reducers = combineReducers({
    profilePage: profileReducer, 
    dialogsPage: dialogsReducer, 
    sitebar: sitebarReducer,
    usersPage: userReducer,
    auth: authReducer
});
    let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;