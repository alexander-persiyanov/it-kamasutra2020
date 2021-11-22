import {applyMiddleware, combineReducers, createStore,compose} from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(

    applyMiddleware(thunk)
  ));



// let store = createStore(reducers, applyMiddleware(thunk));

window.__store__ = store;
export default store;