/*global React, ReactDOM, localStorage */

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  
  componentDidMount() {
    let json = JSON.parse(localStorage.getItem('options'));
    if(json) {
      this.setState(() => {
        return {
          options: json
        }
      });
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      let json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] }
    });
  }
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((o) => o !== optionToRemove)
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
    const subtitle = "I'll choose for you!";
    
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
IndecisionApp.defaultProps = {
  options: []
};




const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}
Header.defaultProps = {
  title: 'Indecision'
};


const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}>
        Choose an option
      </button>
    </div>
  );
}


const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => {
          return <Option 
                    key={option} 
                    text={option}
                    handleDeleteOption={props.handleDeleteOption} />
        })
      }
    </div>
  );
}


const Option = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <button onClick={(e) => {
        props.handleDeleteOption(props.text)
      }}>
        Remove
      </button>
    </div>
  );
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