import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,

});
let store = createStore(reducers);

window.store = store;
export default store;