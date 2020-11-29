import React from 'react';
import './button.css';

const Button = (props: any) => {
  const sec = props.variant === 'secondary';

  return (
    <div>
      <button
        className={'button ' + (sec ? 'secondary ' : 'primary ') + (props.isLarge ? 'larger ' : 'smaller ')}
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}>
        {props.label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'button',
  variant: 'secondary',
  isLarge: false,
  disabled: false,
};

export default Button;
