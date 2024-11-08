import React, { useState, useEffect } from 'react';

function listeningTo() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = 'YOUR_SPOTIFY_ACCESS_TOKEN'; // Replace this with your Spotify access token
    if (accessToken) {
      fetchCurrentTrack(accessToken);
    }
  }, []);

  async function fetchCurrentTrack(accessToken) {
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
      },
    });
    const data = await response.json();
    setTrack(data.item);
    setLoading(false);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Now Playing:</h2>
      {track ? (
        <div>
          <img src={track.album.images[0].url} alt={track.name} width="100" />
          <p>{track.name} by {track.artists[0].name}</p>
        </div>
      ) : (
        <p>No track playing.</p>
      )}
    </div>
  );
}

export default listeningTo;
