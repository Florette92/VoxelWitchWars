# Deployment Guide

## 1. Frontend (Game Client) - GitHub Pages
This repository is configured to deploy the frontend to GitHub Pages automatically using GitHub Actions.

1.  Push your code to GitHub.
2.  Go to **Settings > Pages**.
3.  Select **Source**: `Deploy from a branch`.
4.  Select **Branch**: `gh-pages` (this branch is created automatically by the Action).
5.  Your game will be available at `https://<username>.github.io/<repo-name>/`.

## 2. Backend (Lobby Server) - Render.com
GitHub Pages **cannot** run the Lobby Server (`server/server.js`). You need a backend host.
We recommend **Render** (it has a free tier).

### Steps to Deploy Server:
1.  Create an account on [Render.com](https://render.com).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the service:
    *   **Name**: `voxel-witch-wars-server` (or similar)
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server/server.js`
5.  Click **Create Web Service**.
6.  Once deployed, copy the **Service URL** (e.g., `https://voxel-witch-wars.onrender.com`).

### Connect Frontend to Backend:
1.  Open `src/core/NetworkManager.js`.
2.  Find the `connectToLobbyServer` method.
3.  Replace the `serverUrl` line:
    ```javascript
    // Replace this:
    const serverUrl = `http://${window.location.hostname}:3001`;
    
    // With your Render URL:
    const serverUrl = 'https://voxel-witch-wars.onrender.com'; 
    ```
4.  Commit and push the changes. The frontend will update and connect to your live server!
