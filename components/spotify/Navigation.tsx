import { GeneralButtonProps } from '../../types/types';
import { PropsWithChildren } from 'react';

const NavigationButton: React.FC<PropsWithChildren<GeneralButtonProps>> = ({
  data,
  children,
}) => {
  return (
    <li className='flex-1'>
      <button
        id='spotify-home-button'
        className='w-full p-2 font-bold text-left duration-200 text-slate-400 hover:text-white drop-shadow-xl hover:drop-shadow-none'
        onClick={data.clickHandler}
      >
        {children}
      </button>
    </li>
  );
};

export default NavigationButton;
