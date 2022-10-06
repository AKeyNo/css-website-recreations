import { NavigationProps } from '../../types/navigationProps';
import { PropsWithChildren } from 'react';

const NavigationButton: React.FC<PropsWithChildren<NavigationProps>> = ({
  data,
  children,
}) => {
  return (
    <li className='flex-1'>
      <button
        id='spotify-home-button'
        className='w-full p-2 font-bold text-left duration-200 text-slate-400 hover:text-white drop-shadow-xl'
        onClick={data.clickHandler}
      >
        {children}
      </button>
    </li>
  );
};

export default NavigationButton;
