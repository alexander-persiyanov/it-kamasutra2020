import {combineReducers, createStore} from 'redux';
import authReducer from './auth-reducer';
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer,

});
let store = createStore(reducers);

window.store = store;
export default store;