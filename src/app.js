/*global React, ReactDOM */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  
  handlePick() {
    let selectedOption = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[selectedOption]);
  }
  
  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    });
  }
  
  render() {
    const title = "Indecision App";
    const subtitle = "I'll choose for you!";
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </div>
    );
 }
}


class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}>
            Choose an option
          </button>
      </div>
    );
  }
}


class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => {
            return <Option key={option} text={option} />
          })
        }
      </div>
    );
  }
}


class Option extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}


class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      error: undefined
    }
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
  }
  
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


ReactDOM.render(
  <IndecisionApp />, 
  document.getElementById("app")
);