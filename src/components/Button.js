import './Button.css';

const Button = (props) => {
  const { className, label, inline, type, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={`button ${type ? `btn-${type}` : ''} ${
        inline ? 'inline' : ''
      } ${className}`}>
      {label}
    </button>
  );
};

export default Button;
