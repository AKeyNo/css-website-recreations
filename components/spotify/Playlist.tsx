import PlaylistButton from './PlaylistButton';

const Playlist = () => {
  const playlistNames: Array<string> = [
    'Car Music',
    'Lofi Jams',
    'Pop Hits',
    'From the 80s',
    'Chill Vibes',
    'Party Time',
    'Workout Music',
    'Programming Music',
    'Classical Songs',
  ];

  const handlePlaylistButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log('Playlist button clicked');
  };

  return (
    <div className='relative flex-initial h-full overflow-auto overflow-x-hidden'>
      {playlistNames.map((name, i) => {
        return (
          <PlaylistButton
            key={i}
            data={{ clickHandler: handlePlaylistButtonClick }}
          >
            {name}
          </PlaylistButton>
        );
      })}
    </div>
  );
};

export default Playlist;
