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

## GET /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Request Headers
- `Authorization`: A string representing the JWT token.

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

## POST /partners/register

### Description
This endpoint is used to register a new partner.

### Request Body
The request body should be a JSON object with the following fields:
- `fullName`: An object containing:
  - `firstName`: A string with a minimum length of 3 characters.
  - `lastName`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the partner's email. It must be a valid email address.
- `password`: A string with a minimum length of 5 characters.
- `vehicle`: An object containing:
  - `color`: A string representing the vehicle's color.
  - `plate`: A string representing the vehicle's plate number.
  - `capacity`: A number representing the vehicle's capacity.
  - `type`: A string representing the vehicle's type.

### Response Body

- `partner` :
    - `fullName`: :
        - `firstName`: A string with a minimum length of 3 characters.
        - `lastName`: A string with a minimum length of 3 characters (optional).
    - `email`: A string representing the partner's email. It must be a valid email address.
    - `vehicle`: :
        - `color`: A string representing the vehicle's color.
        - `plate`: A string representing the vehicle's plate number.
        - `capacity`: A number representing the vehicle's capacity.
        - `type`: A string representing the vehicle's type.
- `token` :
    - `JWT token (String)`

## POST /partners/login

### Description
This endpoint is used to log in an existing partner.

### Request Body
The request body should be a JSON object with the following fields:
- `email`: A string representing the partner's email. It must be a valid email address.
- `password`: A string with a minimum length of 5 characters.

### Response Body

- `partner` :
    - `fullName`: :
        - `firstName`: A string with a minimum length of 3 characters.
        - `lastName`: A string with a minimum length of 3 characters (optional).
    - `email`: A string representing the partner's email. It must be a valid email address.
    - `vehicle`: :
        - `color`: A string representing the vehicle's color.
        - `plate`: A string representing the vehicle's plate number.
        - `capacity`: A number representing the vehicle's capacity.
        - `type`: A string representing the vehicle's type.
- `token` :
    - `JWT token (String)`

## GET /partners/profile

### Description
This endpoint is used to get the profile of the authenticated partner.

### Request Headers
- `Authorization`: A string representing the JWT token.

### Response
- **200 OK**: The partner's profile was successfully retrieved.
  - Body:
    ```json
    {
      "_id": "partner_id",
      "fullName": {
        "firstName": "Jane",
        "lastName": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "type": "sedan"
      }
    }
    ```
- **401 Unauthorized**: The partner is not authenticated.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## GET /partners/logout

### Description
This endpoint is used to log out the authenticated partner.

### Request Headers
- `Authorization`: A string representing the JWT token.

### Response
- **200 OK**: The partner was successfully logged out.
  - Body:
    ```json
    {
      "message": "Logged out successfully"
    }
    ```
- **401 Unauthorized**: The partner is not authenticated.
  - Body:
    ```json
    {
      "message": "Unauthorized"
    }
    ```