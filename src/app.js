class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
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