import type { NextPage } from 'next';
import MusicSelection from '../../components/spotify/MusicSelection';
import Sidebar from '../../components/spotify/Sidebar';

const Spotify: NextPage = () => {
  return (
    <div className='grid grid-cols-[15rem_calc(100vw-15rem)] grid-rows-[calc(100vh-6rem)_6rem] gap-0 max-h-screen'>
      <Sidebar />
      <MusicSelection />
      <div
        id='play-bar'
        className='absolute bottom-0 h-24 min-w-full col-span-2 bg-[#181818]'
      ></div>
    </div>
  );
};

export default Spotify;
