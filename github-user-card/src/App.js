import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      user:'RobertMisch',
      userData:{},
      followers:[],
    }
  }
  //componentDidMount is where we do our axios call and gather data
  componentDidMount(){
    console.log('mounted')
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(response => {
        console.log(response.data)
        this.setState({userData:response.data})

        axios.get(`https://api.github.com/users/RobertMisch/followers`)
          .then(response => {
            console.log(response.data)
            this.setState({followers:response.data})
          })
          .catch(err => `there is an error in our second axios ${err}`)
      })
      .catch(err => console.log(`there is an error in our first axios ${err}`))

  }
  componentDidUpdate() {
    // called after every setState (after render)
    console.log(`after render ${this.state}`);
  }

  componentWillUnmount() {
    // called before a component is removed
  }
  fetchFolowers(){
    
  }

  render(){
    console.log('rendering')
    return(
      <div>
        <UserCard 
        user={this.state.userData}
        // followers={this.state.followers}
        />
        <div>
          {
            this.state.followers.map(item => {return <UserCard user={item}/>})
          }
        </div>
      </div>
    )
  }
  
}

export default App;
