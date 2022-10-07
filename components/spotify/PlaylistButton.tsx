import { GeneralButtonProps } from '../../types/types';
import { PropsWithChildren } from 'react';

const PlaylistButton: React.FC<PropsWithChildren<GeneralButtonProps>> = ({
  data,
  children,
}) => {
  return (
    <button
      id='spotify-home-button'
      className='w-full p-2 font-bold text-left duration-75 text-slate-400 hover:text-white drop-shadow-xl hover:drop-shadow-none'
      onClick={data.clickHandler}
    >
      {children}
    </button>
  );
};

export default PlaylistButton;
