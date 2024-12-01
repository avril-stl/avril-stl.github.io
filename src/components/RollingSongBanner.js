import React, { useState, useEffect } from 'react';
import './RollingSongBanner.css';

// RollingSongBanner component will handle fetching the current song data from Last.fm
const RollingSongBanner = () => {
  const [song, setSong] = useState(null); // State to store song data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const user = 'arecibo_april'; // Replace with the actual Last.fm username
  const apiKey = process.env.REACT_APP_API_KEY; 

  // Function to fetch recent tracks from Last.fm API
  const getRecentTracks = async (user, apiKey, limit = 1) => {
    const url = "https://ws.audioscrobbler.com/2.0/";
    const params = new URLSearchParams({
      method: 'user.getRecentTracks',
      user: user,
      api_key: apiKey,
      format: 'json',
      limit: limit,
    });

    const requestUrl = `${url}?${params.toString()}`;

    try {
      const response = await fetch(requestUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      // Get the first track (most recent)
      const recentTrack = data.recenttracks.track[0];
      if (recentTrack) {
        setSong({
          name: recentTrack.name,
          artists: [recentTrack.artist['#text']], // Can be an array of artists
          album: recentTrack.album['#text'],
          url: recentTrack.url,
          image: recentTrack.image?.[2]['#text'], // Get medium image
        });
      } else {
        setSong(null);  // If no tracks, set song as null
      }
    } catch (err) {
      setError('Failed to fetch recent tracks');
      console.error('Error fetching recent tracks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecentTracks(user, apiKey);
    const intervalId = setInterval(() => {
      getRecentTracks(user, apiKey);
    }, 15000); // (refresh every 15 seconds)
    return () => clearInterval(intervalId);
  }, []); 

  // Check if the song is still loading or if there was an error
  if (loading) {
    return (
      <div className="banner">
        <div className="banner-content">
          <div className="center">
            <h1 className="song-banner-text center">Loading song...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="banner">
        <div className="banner-content">
          <div className="center">
            <h1 className="song-banner-text center" style={{ color: 'red' }}>
              Error: {error}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // If no song data, display a fallback message
  if (!song) {
    return (
      <div className="banner">
        <div className="banner-content">
          <div className="center">
            <h1 className="song-banner-text center">No song is currently playing</h1>
          </div>
        </div>
      </div>
    );
  }

  // If song data exists, display it
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="center">
          <h1 className="song-banner-text center">
            <a 
              href={song.url} 
              className="my-link"
            >
              Avril Is Currently Jamming To: {song.artists.join(', ')} - {song.name}
            </a>
          </h1>

        </div>
      </div>
    </div>
  );
};

export default RollingSongBanner;

