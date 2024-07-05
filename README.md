

---

# Real-Time Tracker

## Overview

Real-Time Tracker is a web application designed for real-time tracking of various entities, offering accurate and timely updates.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: WebSocket
- **Mapping**: Leaflet.js

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bitof-KARTIK/Real-Time-Tracker.git
   cd Real-Time-Tracker
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:

   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   The app will run on `http://localhost:5000`.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

Licensed under the MIT License.

---