import {Component} from 'react'
import Welcome from './components/Welcome'
import './App.css'
import Counter from './components/Counter'

class App extends Component{
  state={isLoggedIn:false}
  onLogin=()=>{
    this.setState(
      prevstate=>{
        return {isLoggedIn:true}
      }
    )
  }
  onLogout=()=>{
    this.setState(
      prevstate=>{
        return {isLoggedIn:false}
      }
    )
  }

  render(){
    const {isLoggedIn}=this.state
    return(
      <div className='container'>
      {isLoggedIn ? 
      
      <div> 
        <Counter/>
       
      <button onClick={this.onLogout}>Logout</button> 
      </div> : 
      <><Welcome name='Ravi' greeting='Hello' /><button onClick={this.onLogin}>Login</button></>}
      </div>
    )
      
    
  }
}

export default App