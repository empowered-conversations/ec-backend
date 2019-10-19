# Empowered Conversations v1.0.0

Backend Project for Lambda&#39;s Build Week, October 21-25, 2019

- [Auth](#auth)
	- [Logs an User In](#logs-an-user-in)
	- [Registers a New User](#registers-a-new-user)
	


# Auth

## Logs an User In

<p>Logs an User In</p>

	POST /auth/login


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>Username of the User</p>							|
| password			| String			|  <p>Password of the User</p>							|

### Success Response

Success-Response:

```
{
  "message": "Welcome back test",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNTcxNTE0NzcwLCJleHAiOjE1NzE2MDExNzB9.4iEFSx0i7V8cvYgZ0ALRAQG1aUTqqguQ5xDG86sgpjg",
  "user": {
     "id": 1,
     "username": "test",
     "created_at": "2019-10-19 18:21:31",
     "updated_at": "2019-10-19 18:21:31"
  }
}
```
### Error Response

Username-Not-Found-Response

```
{
     "message": "Username is not in the system."
}
```
Incorrect-Password

```
{
     "message": "Incorrect Password"
}
```
## Registers a New User

<p>Registers a New User</p>

	POST /auth/register


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| username			| String			|  <p>The New Users username</p>							|
| password			| String			|  <p>The New Users password</p>							|

### Success Response

Success-Response:

```
{
  "id": 2,
  "username": "testuser",
  "created_at": "2019-10-19 19:58:08",
  "updated_at": "2019-10-19 19:58:08"
}
```
### Error Response

Username-Already-Taken

```
{
     "message": "Username is already taken"
}
```

