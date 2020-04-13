import React, { Component } from 'react'

 class UserGreetings extends Component {
     constructor(props) {
     super(props)
     this.handleLogOutClick = this.handleLogOutClick.bind(this)
     this.handleLoginClick = this.handleLoginClick.bind(this)
     this.handleOniInput = this.handleOniInput.bind(this)

     this.state = {isLoggedIn: false, UserName : 'VIP Guest'}
     }
 

     handleLoginClick(){
        this.setState({isLoggedIn:true})
     }

     handleLogOutClick(){
        this.setState({isLoggedIn:false})
     }

     handleOniInput(e){
this.setState({
UserName : e.target.value
})

     }

    render()  {
  
        return (
            <div>
           
          UserName:  <input type = 'text' name ='input' value = {this.props.value}  onInput = {this.handleLoginClick} ></input> <br></br>
          UserName: <input type = 'password' name ='pwd' value = '' ></input>
           <br></br>
           <br></br>
            <div>
            <button onClick = {this.handleLoginClick}>Log In </button>

            <button onClick = {this.handleLogOutClick}>Log Out</button>
            </div>
            <br></br>
            {this.state.isLoggedIn ?
             (<div> Log in! Welcome {this.state.UserName} :) </div>) :
              (<div> Not log in, Welcome {this.state.value} :)</div>)}

            </div>
            );
    }
}

export default UserGreetings;
