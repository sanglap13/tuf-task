# takeUforward Task

A Dynamic One-Page Website with a dashboard which can be used to add new banners or edit pre-existing banners.

## Author

- [@sanglap13](https://github.com/sanglap13)
  (sanglapmridhawork@gmail.com)

  ## Live Link

- [https://tuf-sanglap.web.app](https://tuf-sanglap.web.app)
- The backend is deployed on Render's free tier. So it will take 50seconds to load for the 1st time

## Tech Stack

**Frontend:** HTML, CSS, React, Typescript, TailwindCSS.

**Backend:** Node.js, Express, Typescript.

**Database:** MySQL.

**Extras:** Axios.

## Screenshots

![Home](/screenshots/ss-home.png)

![Dashboard](/screenshots/ss-dashboard.png)

![AddBanner](/screenshots/ss-addBanner.png)

## Backend (Express)📦

The backend is built using Express and Typescript on runtime Nodejs, providing a RESTful API to communicate with the frontend.

### Setting Up the Backend 🛠️

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Rename `.env.example` file to` .env` file and add the necessary things:

```bash
  PORT=8000 or any port you want
   DB_HOST=localhost or production host
   DB_NAME=name of your database
   DB_USER=name of database user
   DB_PASS=password of database user
   DB_PORT=port of your database
```

3. Install required dependencies:

   ```bash
   npm install
   ```

4. Run the server locally:

```bash
 tsc -b
 node ./dist/app.js
```

## Frontend (React with Vite) ⚛️

The frontend is built using React and Vite, providing fast development and hot module replacement for efficient code changes. The frontend offers a user-friendly interface to interact with the API provided by the Express backend.

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the required Node packages:
   ```bash
    npm install
   ```
3. Start the Vite development server:
   ```bash
    npm run dev
   ```
