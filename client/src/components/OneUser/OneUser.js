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
          <div className="card border-success mb-3">
            <div className="card-header bg-transparent border-success">{this.state.oneUserData.username}</div>
            <div className="card-body text-success">
              <h5 className="card-title">soem text</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-footer bg-transparent border-success">Footer</div>
          </div>
        );
    } else {
      return (
        <div>Something went wrong!!!</div>
      )
    }
  }
}


export default OneUser;