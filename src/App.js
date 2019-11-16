import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './memo/Memo'
import AddForm from './memo/AddForm'

class App extends Component{
  constructor(props) {
    super();
  }

  render(){
    return (
    <div>
      <h1>Memo</h1>
      <AddForm />
      <hr/>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Memo />
    </div>
    )
  }
  
}

export default connect()(App);
