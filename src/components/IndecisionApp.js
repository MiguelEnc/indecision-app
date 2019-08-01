/*global React, ReactDOM, localStorage */
import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
    }
    
    this.handleResetSelectedOption = this.handleResetSelectedOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return { options: [] }
    });
  };
  
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((o) => o !== optionToRemove)
      }
    });
  };
  
  handlePick() {
    let selectedOption = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => {
      return {
        selectedOption: this.state.options[selectedOption]
      }
    });
  };
  
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
  };
  
  handleResetSelectedOption() {
    this.setState(() => {
      return {
        selectedOption: undefined
      }
    });
  };
  
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
        <OptionModal 
          selectedOption={this.state.selectedOption}
          closeModal={this.handleResetSelectedOption} />
      </div>
    );
  }
}
