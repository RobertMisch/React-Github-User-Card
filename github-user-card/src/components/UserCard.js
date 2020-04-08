import React from 'react';
import '../App';

class UserCard extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
        return(
            <div className="UserCard">
                <p>{`User: ${this.props.user.login}`}</p>
                <img src={`${this.props.user.avatar_url}`}/>
                {/* <p>{`followers: ${console.log(this.props.followers)}`}</p> */}
            </div>
        )
    }
}

export default UserCard