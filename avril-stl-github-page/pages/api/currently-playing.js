import axios from 'axios';

// Function to fetch a new access token using the Client Credentials Flow
async function fetchAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID; // Your Spotify client ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET; // Your Spotify client secret

  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const response = await axios.post(
    tokenUrl,
    'grant_type=client_credentials',
    {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return response.data.access_token;  // Return the access token
}

export default async function handler(req, res) {
  try {
    // Fetch a new access token if we don't have one
    const accessToken = await fetchAccessToken();

    // Fetch the currently playing track from Spotify
    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status === 200 && response.data) {
      // Return the currently playing track info
      res.status(200).json(response.data);
    } else {
      // No track is currently playing
      res.status(404).json({ message: 'No track is currently playing' });
    }
  } catch (err) {
    console.error('Error fetching currently playing track:', err);
    res.status(500).json({ error: 'Failed to fetch currently playing track' });
  }
}
