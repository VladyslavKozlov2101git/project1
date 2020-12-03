import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";
import './index.css';
import {addPost, updateNewPostText, subscribe} from "./redux/state"
import {BrowserRouter} from "react-router-dom"





let renderEntireTree = (state) =>{

  ReactDOM.render(
    <BrowserRouter>
      <App state = {state} addPost = {addPost} updateNewPostText = {updateNewPostText} />
    </BrowserRouter>,
    document.getElementById('root')
  );

}

subscribe(renderEntireTree);



renderEntireTree (state);