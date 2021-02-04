import {combineReducers, createStore} from 'redux';
import dialogReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    dialogsPage:dialogReducer,
    profilePage:profileReducer,

});
let store = createStore(reducers);

window.store = store;
export default store;