import type { NextPage } from 'next';

const Spotify: NextPage = () => {
  return (
    <div
      id='nav-bar'
      className='flex items-center justify-center min-h-screen align-middle'
    >
      <div>
        <a href='http://localhost:3000/spotify'>
          <button
            id='spotify-button'
            className='flex-auto w-32 h-16 text-white transition duration-200 ease-in-out bg-slate-700 drop-shadow-xl rounded-xl hover:bg-green-600 hover:-translate-y-1 hover:scale-110'
          >
            Spotify
          </button>
        </a>
      </div>
    </div>
  );
};

export default Spotify;
