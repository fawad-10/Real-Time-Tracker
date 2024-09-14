# Real-Time Location Tracker App

This is a demo real-time location tracker built with **Node.js**, **Socket.io**, and **Leaflet.js**. The application tracks users' geolocation in real-time and displays their positions on a map. This app is meant for demo purposes, not for high-traffic or production-level usage.

## Features

- **Real-Time Tracking**: Users' geolocations are updated live and shown on a map.
- **Interactive Map**: Uses Leaflet.js to display locations with markers and map tiles from OpenStreetMap.
- **Socket.IO Integration**: Handles real-time communication between the server and connected clients.
- **User Disconnect Handling**: When a user disconnects, their marker is removed from the map.

## Installation

Follow these steps to get the app running locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/real-time-tracker.git
cd real-time-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm start
```

This will start the Node.js server, and the app will be available at `http://localhost:3000`.

### 4. View in Browser

Open your browser and go to:

```
http://localhost:3000
```

## Usage

Once the app is running, users can:

1. **Allow Geolocation**: When prompted, allow the app to access your location.
2. **Track Locations**: Your location will be shown on the map and updated in real-time.
3. **View Other Users**: If multiple users are connected, their locations will be displayed as well.
4. **Disconnect Handling**: If a user disconnects, their marker will be removed from the map.

## File Structure

```bash
.
├── public
│   ├── css
│   │   └── style.css          # Styling for the application
│   └── js
│       └── script.js          # Frontend JavaScript for tracking and map interaction
├── views
│   └── index.ejs              # EJS template for the main HTML page
├── app.js                     # Main Node.js server file with Express and Socket.io setup
├── package.json               # Project metadata and dependencies
└── README.md                  # This file
```

## Dependencies

- [Express.js](https://expressjs.com/): Web framework for Node.js
- [Socket.IO](https://socket.io/): Library for real-time web communication
- [Leaflet.js](https://leafletjs.com/): Interactive maps for the web
- [EJS](https://ejs.co/): Embedded JavaScript templating

## Future Improvements

This app is designed as a demo and is not optimized for high traffic or large-scale usage. Possible future enhancements include:

- Implementing rate limiting for location updates.
- Enhancing scalability for more users.
- Optimizing geolocation accuracy settings.
- Deploying the app to cloud platforms like Heroku or Vercel.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

Feel free to modify this based on your specific preferences and needs.
