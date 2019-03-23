/*global React, ReactDOM */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Option 1', 'Option 2', 'Option 3']
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      }
    });
  }
  
  render() {
    const title = "Indecision App";
    const subtitle = "I'll choose for you!";
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
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
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
  }
  
  handlePick() {
    
  }
  
  render() {
    return (
      <div>
        <button onclick={this.handlePick}>Choose an option</button>
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
  onFormSubmit(e) {
    e.preventDefault();
    
    let option = e.target.elements.option.value.trim();
    if (option) {
      
    }
  }
  
  render() {
    return (
      <div>
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