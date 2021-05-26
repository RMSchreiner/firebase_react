import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

var config = {apiKey: "AIzaSyAStXGoiii-qNcaLtYa6sMqH8OiV8dbRUc",
authDomain: "reactstart-db019.firebaseapp.com",
databaseURL: "https//reactstart-db019.firebase.io.com",
projectId: "reactstart-db019",
storageBucket: "reactstart-db019.appspot.com",
messagingSenderId: "993529651163",
appId: "1:993529651163:web:0c880ec73f57d16ce251fe",
measurementId: "G-C0LHX78GLJ"
};
// Initialize Firebase
firebase.initializeApp(config);

ReactDOM.render(
    <App />,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.unregister();