import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  constructor(){
    super();
    console.log(firebase);
  }

render(){
  return(
    <div>
      <h1>Hello</h1>
    </div>
  );
}
}
export default App;
