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

## POST /users/login

### Description
This endpoint is used to log in an existing user.

### Request Body
The request body should be a JSON object with the following fields:
- `email`: A string representing the user's email. It must be a valid email address.
- `password`: A string with a minimum length of 5 characters.

Example:
```json
{
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

## GET /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Request Headers
- `Authorization`: A string representing the JWT token.

Example:
```json
{
  "Authorization": "Bearer jwt_token"
}
```

### Response
- **200 OK**: The user's profile was successfully retrieved.
  - Body:
    ```json
    {
      "_id": "user_id",
      "fullName": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```
- **401 Unauthorized**: The user is not authenticated.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request
```sh
curl -X GET http://localhost:4000/users/profile \
-H "Authorization: Bearer jwt_token"
```

### Example Response
```json
{
  "_id": "user_id",
  "fullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Response
```json
{
  "message": "Unauthorized"
}
```

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Request Headers
- `Authorization`: A string representing the JWT token.

Example:
```json
{
  "Authorization": "Bearer jwt_token"
}
```

### Response
- **200 OK**: The user was successfully logged out.
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **401 Unauthorized**: The user is not authenticated.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

### Example Request
```sh
curl -X GET http://localhost:4000/users/logout \
-H "Authorization: Bearer jwt_token"
```

### Example Response
```json
{
  "message": "Logged out successfully"
}
```

### Error Response
```json
{
  "message": "Unauthorized"
}
```