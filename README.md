# HelpBook

## Project Description

HelpBook is a SPA (Single Page Application) which provides a platform for people and organizations to request help and users to provide it. On HelpBook donors can make a donation securely and easily and the receivers will have a profile to ask for the help they need, that will be easily accessable to donors. The app is built with the latest tools and techniques for optimized user experience.
The App utilizes React built-in and hooks and allows users (donors) to donate and follow users in real time. The app also allow users (receivers) to seamlessly edit, add or remove wishlist items or money goals with a user friendly pattern.
Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP with axios library, using the JSON format.

## Project Features

1. Users are be able to choose if they need help or wants to provide help.
2. Users that want to help (Donors) are able to access and get directed to the help dashboard page without logging in.
3. Donors are be able to browse all categories and help requests on the Dashboard.
4. Donors are directed to login page when wanting to perform a help action (donation).
5. Donors with no account can access register page through the login page and register successfully.
6. Donors when registered successfully are directed to their profile and are able to track all their activities and information.
7. Donors are directed to payment page information when donate action is selected.
8. Donors receive a message providing them address and directions of where to drop items and the time limit to do it.
9. Donors are able to pay with credit card successfully.
10. Donors are not be able to create a wishlist or ask for donations.
11. Users that ask for help (Receivers) are directed to login page when they press the 'I want help' button.
12. Receivers with no account can access register page through the login page and register successfully.
13. Receivers are able to select if they are an organization or an individual during registration.
14. Receivers once logged in will be directed to their profile page.
15. Receivers are able to edit, add, delete an item in the wishlist or control the donation money amount.
16. Receivers are able to track all their information, activities and history.

## Setup App

To setup the app,

- Fork and clone and repo.
- Navigate to client folder in command line and install dependecies with `npm install`.
- Navigate to server folder in command line and install dependecies with `npm install`.

## Setup Database

- Set a .env file using the .env.example provided
- Run psql using `psql -d <project name in .env> -U <username in .env>`
- Create tables in database using `\i db/schema/01_schema.sql`
- Seed tables using `\i db/seeds/01_seeds.sql`

## Running The app

- Run the server using

```sh
npm run local
```

- Run the client using

```sh
npm start
```

## ScreenShots

!['Landing Page'](https://github.com/DrMustafaH/HelpBook/blob/main/docs/HelpBook%20Landing%20Page.png?raw=true)
_Helpbook Landing Page_

## Project Stack

**Front-End:** React, Axios, JSX, HTML, SASS, JavaScript, Material UI, Stripe, JWT-decode

**Back-End:** Express, Node.js, PostgreSQL, JWT

## Dependencies

#### Client Dependencies

- React
- React-dom
- React-bootstrap
- React-dotenv
- React-router
- React-router-dom
- Material-ui/core
- Material-ui/icons
- Stripe/react-stripe-js
- Stripe/stripe-js
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/user-event
- Axios
- Bootstrap
- Font-awesome
- JWT-decode
- React-scripts
- SASS
- Babel

#### Server Dependencies

- Body-Parser
- Chalk
- Dotenv
- Express
- JsonWebToken (JWT)
- Morgan
- Pg
- Pg-native
- Nodemon
