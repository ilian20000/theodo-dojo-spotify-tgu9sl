import logo from './assets/logo-spot.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTracks } from './lib/fetchTracks';
import { SavedTrack, Track } from 'spotify-types';

const App = () => {
  const trackUrls = [
    'https://p.scdn.co/mp3-preview/742294f35af9390e799dd96c633788410a332e52',
    'https://p.scdn.co/mp3-preview/5a12483aa3b51331aba663131dbac967ccb33d99',
    'https://p.scdn.co/mp3-preview/31f65b6a613010f22316c7be335b62226cf2f263',
    'https://p.scdn.co/mp3-preview/0f6b8a3524ec410020457da4cdd7717f9addce2f',
    'https://p.scdn.co/mp3-preview/ac28d1b0be285ed3bfd8e9fa5fad133776d7cf36',
  ];

  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const goToPrevTrack = () => {
    if(trackIndex>0){
    setTrackIndex(trackIndex - 1)
    };
  };

  const { data: tracks, isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });
  // console.log(tracks?.[0])

  const AlbumCover = ({ track }: SavedTrack) => {
    const src = track.album.images[0]?.url; // A changer ;)
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };
  let currentTrack = tracks?.[trackIndex]?.track;
  console.log(currentTrack?.preview_url);

  if (isLoading) {
    return (
      <>
        <h1>LAOOODIIING...</h1>
      </>
    );
  } else {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Le WatiBlindtest LEZGO</h1>
          </header>
          <div className="App-buttons">
            <AlbumCover track={currentTrack} />
          </div>
          <div className="App-images">
            <p>Track n°{trackIndex + 1}</p>
            <p>Playing LIVE : {tracks?.[trackIndex]?.track.name}</p>
          </div>

          <audio src={currentTrack?.preview_url} autoPlay controls />
          <div className="App-buttons">
            <button onClick={goToPrevTrack}> PREV TRACK</button>
            <button onClick={goToNextTrack}>NEXT TRAACK</button>
          </div>
        </div>{' '}
      </>
    );
  }
};

export default App;
