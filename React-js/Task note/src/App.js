import React from "react";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer"
import './App.css';


export default function App(){
  return (
    <div>
      <Header/>
      <div>
        <h1>Luciano</h1>
      </div>
      <Footer/>
    </div>
  );
}

//import { Component } from "react"; 
 
 /*(export default function App(){
    return (
      <div>
        <h1>Hello</h1>
        <p>Mr Wannabe </p>
      </div>
    );
 }*/



 
/*export default class App extends Component {
  render(){
    return (
      <div>
        <h1>Hello World man</h1>
      </div>
    );
  }
}*/

/*export default function App(){
  return React.createElement("h1",{ClassName:"active"},"King Lucian")
}*/