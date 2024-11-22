import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListeningTo = () => {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  // Fetch currently playing track
  const fetchListeningTo = async () => {
    try {
      const response = await axios.get('/api/currently-playing'); // This will point to the Vercel API route
      setTrack(response.data);
    } catch (err) {
      setError('Failed to fetch currently playing track');
      console.error(err);
    }
  };

  useEffect(() => {
    // Call the API when the component mounts
    fetchListeningTo();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Currently Playing</h2>
      <p>Track: {track.item.name}</p>
      <p>Artist: {track.item.artists.map(artist => artist.name).join(', ')}</p>
      <p>Album: {track.item.album.name}</p>
      <img src={track.item.album.images[0].url} alt="Album Art" width="100" />
    </div>
  );
};

export default ListeningTo;



