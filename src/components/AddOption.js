import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onFormSubmit(e) {
    e.preventDefault();
    
    let option = e.target.elements.option.value.trim();
    let error = this.props.handleAddOption(option);
    
    this.setState(() => {
      return {
        error: error
      }
    });
    
    e.target.elements.option.value = '';
  };
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Add option</button>
        </form>
      </div>
    );
  }
}