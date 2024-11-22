const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Spotify API Credentials
const clientId = 'ddc0f3b879d04a3692394936af5abccb';
const clientSecret = '8be47ceff0e8474a920ea894ed779127';
const spotifyApiUrl = 'https://accounts.spotify.com/api/token';
const spotifyApiBaseUrl = 'https://api.spotify.com/v1';

// In-memory token storage for simplicity
let accessToken;

// Function to fetch access token
async function fetchAccessToken() {
  const response = await axios.post(spotifyApiUrl, 'grant_type=client_credentials', {
    headers: {
      'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  accessToken = response.data.access_token;
  console.log('Access Token Fetched:', accessToken);
}

// Initialize access token on server start
fetchAccessToken();

// Endpoint to proxy user's currently playing track
app.get('/currently-playing', async (req, res) => {
  // Refresh token if it's expired (simplified example, no actual expiration check)
  // In a real scenario, implement a proper token refresh mechanism
  if (!accessToken) {
    await fetchAccessToken();
  }

  try {
    const response = await axios.get(`${spotifyApiBaseUrl}/me/player/currently-playing`, {
   
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });
    console.log('Currently playing data:', response.data); 
    res.json(response.data);

  } catch (error) {
    console.error('Error fetching currently playing track:', error);
    res.status(500).send('Failed to fetch currently playing track');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log('Proxy Endpoint: http://localhost:3000/currently-playing');
});