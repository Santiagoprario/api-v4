
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>


### Built With

This project structure is built using

-   [Express.js](https://expressjs.com/)
-   [Sequelize](https://sequelize.org/)
-   [Swagger](https://swagger.io/)
-   [Typescript](https://www.typescriptlang.org/)
-   [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
-   [Postgresql](https://www.postgresql.org/)
-   [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Features

-   Everything is modular and unit testable
-   Typescript everything
-   Project API structures with routes, controllers, models, repositories, middlewares, and services
-   Centralized configuration input validator

### Folder Structure

```
├── .husky/                     # Pre-commit config for lint staged
├── docs/                       # Swagger API docs
├── src/                        # All application source
├──── @types/                   # Type definition for modules
|
├──── api/
├────── controllers/            # Define all controllers
├────── middlewares/            # Define all middlewares
├────── models/                 # Define all sequelize models
├────── repositories/           # Define all repositories
├────── routes/
├──────── v1/                   # Define all v1 routes
├────── services/               # Define all services
├────── types/                  # Define all input types
|
├──── config/
├────── appConfig.ts            # Define app configuration
|
├──── constants/                # Define all constants
├──── database/                 # Define database connection and sync tables
├──── utils/                    # Define reusable libs
├──── server.ts                 # Create express config
├──── index.ts                  # ENTRYPOINT - Start server
|
└── ...
```

### Installation


3. Create `.env` file in main directory
4. Copy and customize envs from `.env.example`
5. Test and build the project
    ```sh
    npm run build
    ```
6. Sync database tables
    ```sh
    npm run sync-db
    ```
7. Run the server
    ```sh
    npm run start
    ```
8. Access swagger docs from `localhost:3001/docs/v1`


<h2>Routes<h2>

- GET   api/v1/users/ +2
- GET   api/v1/users/:idClient/clients +2
- GET   api/v1/users/:idClient/clients/:idNumber/forms +2
- GET   api/v1/users/:idClient/clients/:idNumber/operations +2
- GET   api/v1/users/:idClient/clients/:idNumber/works +2
- POST  api/v1/users/ +2
- POST  api/v1/users/:idClient/clients +2