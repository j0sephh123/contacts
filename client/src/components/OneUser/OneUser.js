import React, {Component} from 'react';
import axios from 'axios';


class OneUser extends Component {
  state = {
    oneUserData : [],
    error: false
  }
  componentDidMount(){
    axios({
      method: 'get',
      url: `http://localhost:5000/users/${this.props.match.params.userid}`,
    })
    .then(response => {
      console.log(response.data.result);
      this.setState(() => {
        return {
          oneUserData: response.data.result
        }
      })
    })
    .catch(err => console.log(err));
  }
  render(){
    if(!this.state.error){
        return (
          <div>success: {this.state.oneUserData.username}</div>
        );
    } else {
      return (
        <div>Something went wrong!!!</div>
      )
    }
  }
}

export default OneUser;