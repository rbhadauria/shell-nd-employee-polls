import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {
  const { label, className, ...inputProps } = props;

  return (
    <div className="input-container">
      <div>{props.label}</div>
      <input {...inputProps} ref={ref} />
    </div>
  );
});

export default Input;
