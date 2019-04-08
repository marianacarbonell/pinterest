import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


firebase.initializeApp({
        apiKey: "AIzaSyDCzEyMWwfDzAAivUESp8vE2Ou61oCzlN8",
        authDomain: "comentarios-cd6c9.firebaseapp.com",
        databaseURL: "https://comentarios-cd6c9.firebaseio.com",
        projectId: "comentarios-cd6c9",
        storageBucket: "comentarios-cd6c9.appspot.com",
        messagingSenderId: "815230709622"
    
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
