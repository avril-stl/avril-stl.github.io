import React, { useState, useEffect } from 'react';

const CurrentlyPlaying = () => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call your API to get the currently playing track
    const fetchCurrentlyPlaying = async () => {
      try {
        // Fetch the access token from the API to authenticate your app
        const authResponse = await fetch('/api/get-access-token');
        const authData = await authResponse.json();
        const { access_token } = authData;

        // Fetch the currently playing track
        const response = await fetch(`/api/currently-playing?access_token=${access_token}`);
        const trackData = await response.json();

        if (trackData.name) {
          setTrack(trackData); // Set track data if a song is playing
        } else {
          setTrack(null); // No song playing
        }
      } catch (err) {
        setError('Error fetching currently playing track');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentlyPlaying();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {track ? (
        <div>
          <h2>Currently Playing</h2>
          <p>Song: {track.name}</p>
          <p>Artists: {track.artists.join(', ')}</p>
          <p>Album: {track.album}</p>
          <img src={track.image} alt={track.album} />
          <a href={track.url} target="_blank" rel="noopener noreferrer">
            Listen on Spotify
          </a>
        </div>
      ) : (
        <div>No song is currently playing.</div>
      )}
    </div>
  );
};

export default CurrentlyPlaying;
