# Car Rental Server

The server is an Express API backed by MongoDB. It handles authentication, car listings, availability, bookings, and owner operations.

## Configure environment

Create `.env` in this directory using `.env.example` as a template. Configure:

- `MONGODB_URI` — MongoDB connection URI. The server uses the `car-rental` database.
- `JWT_SECRET` — a long, random secret for signing authentication tokens.
- `IMAGEKIT_PUBLIC_KEY`, `IMAGEKIT_PRIVATE_KEY`, `IMAGEKIT_URL_ENDPOINT` — ImageKit credentials for image uploads.
- `PORT` — optional; defaults to `3000`.

Keep credentials in `.env`; do not commit them or place real credentials in `.env.example`.

## Run locally

Install dependencies and start the API:

```bash
npm install
npm run server
```

The server connects to MongoDB before listening. By default, the API is available at `http://localhost:3000`.

For a non-watching start, use `npm start`.

## Main API routes

- `/api/user` — registration, login, user details, and car listings
- `/api/owner` — owner operations and car management
- `/api/bookings` — availability checks and booking management

See the [root README](../README.md) for the application overview and full local setup.
