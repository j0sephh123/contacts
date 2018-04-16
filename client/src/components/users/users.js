import React, {Component} from 'react';
import axios from 'axios';


class Users extends Component {
  state = {
    allUsers: [],
    error: false,
    maikamudeba: ''
  }
  
  onDeleteHandler = (id) => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/users/${id}`,
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  onShowHandler = (id) => {
    axios({
      method: 'get',
      url: `http://localhost:5000/users/${id}`,
    })
    .then(result => {
      this.props.history.push(`/users/${id}`);
    })
    .catch(err => console.log(err));
  }

  componentDidMount(){
    axios({
      method: 'get',
      url: 'http://localhost:5000/users'
    })
    .then(response => {
        this.setState(() => {
          return {
            allUsers: response.data.arrayOfUsers
          }
        });
    })
    .catch(err => {
      console.log(err);
      this.setState({error: true});
    });
  }
  // put hover
  // 
  render(){
    
    let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
    if(!this.state.error){
      posts = this.state.allUsers.map(user =>
        <div className='container mb-3' key={user._id}>
          <li className='list-group-item'>{user.username}</li>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => this.onShowHandler(user._id)} className="btn btn-primary">Show</button>
            <button className="btn btn-success">Edit</button>
            <button onClick={() => this.onDeleteHandler(user._id)} className="btn btn-danger">Delete</button>
          </div>
        </div> 
      );
    }

    return (
      <ul className="list-group">
        {posts}
      </ul>
    );
  }
} 

export default Users;