import React, { Component } from 'react'
import User from './User';
import UserClass from './UserClass';
import userContext from '../utils/userContext';

class About extends Component {

  constructor(props) {
    console.log("About class comp constructor");
    super(props)
  }

  render() {
    console.log("About class comp render");
    return (
      <div>
        <userContext.Consumer>
          {
            ({ loggedInUser }) => (<h1 className='text-2xl text-red-600'>{loggedInUser}</h1>)
          }
        </userContext.Consumer>
        <h1>About Food order App!!!</h1>
        <User name={'Pradeep'} location={'Bangalore'} number={99999999999} />
        <UserClass name={'Hareesh'} location={"Hyderabad"} number={88888888888} />
      </div>
    )
  }

  componentDidMount() {
    console.log("About class comp did mount");
  }

  componentWillUnmount() {
    console.log("About class comp will unmount");
  }
}

export default About;
