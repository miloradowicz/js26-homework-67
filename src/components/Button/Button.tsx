import { FC } from 'react';

interface Props {
  text: string;
  variant: string;
  action: () => void;
}

const Button: FC<Props> = ({ text, variant, action }) => {
  return (
    <button
      type='button'
      onClick={action}
      className={`btn btn-${variant} w-100`}
    >
      {text}
    </button>
  );
};

export default Button;
