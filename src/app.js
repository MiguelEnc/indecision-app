class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ['Option 1', 'Option 2', 'Option 3'];
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
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
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  
  handleRemoveAll() {
    
  }
  
  render() {
    return (
      <div>
        <button onclick={this.handleRemoveAll}>Remove All</button>
        {
          this.props.options.map((option) => {
            <Option key={option} text={option} />
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