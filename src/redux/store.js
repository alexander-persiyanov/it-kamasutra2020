import {applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,

});
let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
export default store;