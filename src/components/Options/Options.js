import React from 'react';
import Option from '../Option/Option';

const Options = (props) => {
  return (
    <div>
      <div className="options-header">
        <h3 className="options-header__title">Your options</h3>
        <button 
            className="button button--link"
            onClick={props.handleDeleteOptions}>
          Remove All
        </button>
      </div>
      
      {props.options.length === 0 && 
        <p className="options-message">Add an option to get started</p>}
      
      {
        props.options.map((option, index) => {
          return <Option 
                    key={option} 
                    text={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption} />
        })
      }
    </div>
  );
}

export default Options;