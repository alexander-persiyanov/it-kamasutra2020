import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import state from './state_created';
import {addPost,changePost} from './state_created';


export let rerenderEntireTree = ()=>{

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changePost={changePost}/>
     
    </React.StrictMode>,
    document.getElementById('root')
  );
  
};


