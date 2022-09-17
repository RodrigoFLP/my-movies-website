# My movies website


## Instructions to run it locally

1. Clone the repository and cd to the root of the project

2. Install the dependecies 
```bash
npm install
```
3. We need to provide the "API Read Access Token (v4 auth)" from https://www.themoviedb.org/settings/api as an env variable, just rename the .env.example to .env (since it's a practice test I left my access token API in .env.example)
```bash
VITE_MOVIEDB_TOKEN=
```
4. Run the development server:
```bash
npm run dev
```