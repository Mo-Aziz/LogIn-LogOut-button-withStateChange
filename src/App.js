import React, { Component } from "react";

class App extends Component{
constructor(){
super()
this.state = {
isLoggedIn: false
}
this.handleClick= this.handleClick.bind(this)
}
handleClick(){
this.setState( prevState =>{
  return{ isLoggedIn: !prevState.isLoggedIn}
})
}
render(){
  // button shows to logout
let buttonText = this.state.isLoggedIn ? "Log out" : "Log In"
let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out"
  return(
<div>
  <button onClick={this.handleClick}> {buttonText}</button>
  <h1>{displayText}</h1>
  </div>
  )
}
}
export default App;