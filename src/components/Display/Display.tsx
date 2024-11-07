import { FC } from 'react';

interface Props {
  text: string;
  status: 'denied' | 'granted' | 'default';
}

const Display: FC<Props> = ({ text, status }) => {
  let color: string, bgColor: string;

  if (status === 'denied') {
    color = 'light';
    bgColor = 'danger';
  } else if (status === 'granted') {
    color = 'light';
    bgColor = 'success';
  } else {
    color = 'dark';
    bgColor = 'light';
  }

  return (
    <>
      <div
        className={`text-${color} bg-${bgColor} fs-5 border rounded-1 d-flex align-items-center justify-content-center`}
        style={{ height: '50px' }}
      >
        {text}
      </div>
    </>
  );
};

export default Display;
