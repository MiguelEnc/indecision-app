import React from 'react';

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

export default Option;