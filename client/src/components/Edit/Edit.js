import React, {Component} from 'react';

class Edit extends Component {  
  state = {
    // username: 
  };

  onUpdateHandler = () => {
    console.log('on update handler');
  }

  onChangeHandler = () => {
    console.log('on change handler');
  }
  render(){
    const id = (this.props.match.params.userid);
    console.log(this.props);
    return (
      <div>
        <h1>ID: {id}</h1>
        <label>Username:
          <input 
            onChange={() => this.onChangeHandler()} 
            value={this.props.userDetails.user}
            type='text' />
        </label>
        <button onClick={() => this.onUpdateHandler(id)}>Update</button>
      </div>
    );
}

}
export default Edit;