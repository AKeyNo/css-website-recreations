import type { NextPage } from 'next';
import MusicSelection from '../../components/spotify/MusicSelection';
import Sidebar from '../../components/spotify/Sidebar';

const Spotify: NextPage = () => {
  return (
    <div>
      <div className='flex max-h-screen min-h-screen bg-black '>
        <Sidebar />
        <MusicSelection />
      </div>
      <div id='play-bar' className='h-20 min-w-full bg-black'></div>
    </div>
  );
};

export default Spotify;
