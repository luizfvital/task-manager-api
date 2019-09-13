# Task Manager API
A REST-based api where users can save tasks and track their status (completed or not). 
Responses are all sent in JSON format.

## User Endpoints
* **POST /users**               - *create an user*
* **POST /users/login**         - *login*
* **POST /users/logout**        - *logout from current section*
* **POST /users/logoutAll**     - *logout from all sections/devices*
* **GET /users/me**             - *get user's profile*
* **PATCH /users/me**           - *update user's profile*
* **DELETE /users/me**          - *delete user*
* **POST /users/me/avatar**     - *upload an user avatar*
* **GET /users/{id}/avatar**    - *get user's avatar*
* **DELETE /users/me/avatar**   - *delete user's avatar*
