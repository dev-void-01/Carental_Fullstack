# Car Rental

A full-stack car rental application with a React and Vite client and an Express API backed by MongoDB. Users can browse cars, check availability, and request bookings. Owners can list cars and manage their cars and booking requests.

## Features

- Browse and search available cars
- Select rental dates and check car availability
- Register and log in
- Create and view bookings
- Owner dashboard for adding cars, uploading images, and managing cars and bookings
- ImageKit image uploads

## Tech stack

- **Client:** React, Vite, Tailwind CSS, Axios
- **Server:** Node.js, Express, Mongoose, MongoDB
- **Authentication:** JSON Web Tokens and bcrypt
- **Image storage:** ImageKit

## Prerequisites

- Node.js 20 or newer and npm
- A MongoDB database (for example, MongoDB Atlas)
- An ImageKit account for image uploads

## Configuration

Create `server/.env` using `server/.env.example` as a template. Fill in the MongoDB URI, JWT secret, and ImageKit credentials. The server selects the `car-rental` database.

For local development, create `client/.env` using `client/.env.example`. Set `VITE_BASE_URL` to `http://localhost:3000`.

Never commit `.env` files or put real credentials in the example files.

## Run locally

Start the server first. In a terminal:

```bash
cd server
npm install
npm run server
```

In a second terminal, start the client:

```bash
cd client
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). The API runs on `http://localhost:3000` by default.

## Useful commands

Run these commands from the corresponding `client` or `server` directory:

| Command | Description |
| --- | --- |
| `npm install` | Install project dependencies |
| `npm run dev` | Start the Vite client in development mode |
| `npm run build` | Build the client for production |
| `npm run lint` | Run the client ESLint checks |
| `npm run server` | Start the API with Nodemon |
| `npm start` | Start the API with Node.js |

See [client/README.md](client/README.md) and [server/README.md](server/README.md) for directory-specific setup notes.
