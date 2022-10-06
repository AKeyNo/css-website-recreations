import NavigationButton from '../../components/spotify/Navigation';
import {
  Books,
  Heart,
  House,
  MagnifyingGlass,
  PlusCircle,
} from 'phosphor-react';
import Image from 'next/image';

const Sidebar = () => {
  const handleHomeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Home button clicked');
  };

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Search button clicked');
  };
  const handleYourLibraryClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log('Your Library button clicked');
  };
  const handleCreatePlaylistClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log('Create Playlist button clicked');
  };
  const handleLikedSongsClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log('Liked Songs button clicked');
  };

  return (
    <div
      id='spotify-sidebar'
      className='flex flex-col flex-none w-64 pt-5 bg-black'
    >
      <ul id='main-navigation-buttons' className='flex flex-col'>
        <NavigationButton data={{ clickHandler: handleHomeClick }}>
          <House className='float-left mr-2' size={24} weight='fill' />
          Home
        </NavigationButton>
        <NavigationButton data={{ clickHandler: handleSearchClick }}>
          <MagnifyingGlass
            className='float-left mr-2'
            size={24}
            weight='fill'
          />
          Search
        </NavigationButton>
        <NavigationButton
          data={{
            clickHandler: handleYourLibraryClick,
          }}
        >
          <Books className='float-left mr-2' size={24} weight='fill' />
          Your Library
        </NavigationButton>
        <li className='flex-1 p-2'></li>
        <NavigationButton
          data={{
            clickHandler: handleCreatePlaylistClick,
          }}
        >
          <PlusCircle className='float-left mr-2' size={24} weight='fill' />
          Create Playlist
        </NavigationButton>
        <NavigationButton
          data={{
            clickHandler: handleLikedSongsClick,
          }}
        >
          <Heart className='float-left mr-2' size={24} weight='fill' />
          Liked Songs
        </NavigationButton>
      </ul>
      <hr className='flex-1 m-4 opacity-20'></hr>
      <div className='overflow-auto '>
        <PlusCircle className='float-left mr-2' size={200} weight='fill' />

        <PlusCircle className='float-left mr-2' size={200} weight='fill' />
        <PlusCircle className='float-left mr-2' size={200} weight='fill' />
        <PlusCircle className='float-left mr-2' size={200} weight='fill' />
      </div>
      <div id='song-information' className='mt-auto bg-blue-100 '>
        <Image
          src='/spotify/album.jpg'
          alt='album'
          height='500'
          width='500'
          objectFit='cover'
        />
      </div>
    </div>
  );
};

export default Sidebar;
