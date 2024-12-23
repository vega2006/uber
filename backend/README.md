# API Documentation

## POST /users/register

### Description
This endpoint is used to register a new user.

### Request Body
The request body should be a JSON object with the following fields:
- `fullName`: An object containing:
  - `firstName`: A string with a minimum length of 3 characters.
  - `lastName`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string with a minimum length of 5 characters.

Example:
```json
{
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```
### Response Body

- `user` :
    - `fullName`: :
        - `firstName`: A string with a minimum length of 3 characters.
        - `lastName`: A string with a minimum length of 3 characters (optional).
    - `email`: A string representing the user's email. It must be a valid email address.
    - `password`: A string with a minimum length of 5 characters.
- `token` :
    - `JWT token (String)`
