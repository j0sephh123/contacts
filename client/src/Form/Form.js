import React from 'react';

export default class Form extends React.Component {
  state = {
    userName : ''
  }

  onInputChangeHandler = (e) => {
    let name = e.target.name;
    console.log(name);
    let value = e.target.value;
    this.setState(() => {
      return {
        [name]: value
      }
    })
  } // on input change 

  onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.userName
    }
    console.log(data);    
  } // on form submit

  render(){
    const formData = [
      { id: 'nameId', // name
        type: 'text',
        name: 'userName',
        labelName: 'Name', 
        onChange: (e) => this.onInputChangeHandler(e)
      },
    ];
    const renderFormInputs = formData.map((el) => {
      return (
        <div className='form-group' key={el.id}>
          <label htmlFor={el.id}>{el.labelName}</label>
          <input
            id={el.id} 
            className='form-control'
            type={el.type} 
            onChange={el.onChange}
            name={el.name}
          />
        </div>
      );
    });
    return (
      <form 
        className='container w-50'
        onSubmit={(e) => this.onSubmitHandler(e)} >
        <fieldset>
          <legend>Submit A Contact</legend>
            {renderFormInputs}
        </fieldset>
        <button className='btn btn-primary'>Submit</button>        
      </form>
    )
  }
}



