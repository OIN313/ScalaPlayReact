import * as React from 'react';
import './App.css';
import TimeZone from './timeZone/TimeZone';

import logo from './logo.svg';

interface IProps { }

interface IState {
    message: string
}

class App extends React.Component<IProps,IState>{
  constructor(props:IProps)  {
    super(props);
    // this.getDateFunc = this.getDate.bind(this);
    this.state = {
      message : "123"
    }
  }

  // public getDateFunc = ()=>{console.log("fxxk tslint")}

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            {this.state.message}
        </p>
        <button onClick ={this.getDate}>GET DATE</button>
        <TimeZone timeZone="Beijing"/>
        <TimeZone timeZone="Tokyo"/>
        <TimeZone timeZone="London"/>
      </div>
    );
  }

  public setContent(response : any){
    this.setState({
      message : response.content
    })
  }

  public getDate = ()=>{
    // const self = this;
    return fetch('/count',{
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json'     
       }
    })
    .then(response => response.json())
    .then(response => this.setContent(response))
  }

  

}

export default App;
