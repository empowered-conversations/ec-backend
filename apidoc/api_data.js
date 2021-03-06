define({ "api": [
  {
    "type": "post",
    "url": "/api/auth/login",
    "title": "Logs an User In",
    "version": "1.0.0",
    "name": "LoginUser",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Logs an User In</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "The",
            "description": "<p>Users welcome message, token, and user object</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"message\": \"Welcome back test\",\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNTcxNTE0NzcwLCJleHAiOjE1NzE2MDExNzB9.4iEFSx0i7V8cvYgZ0ALRAQG1aUTqqguQ5xDG86sgpjg\",\n  \"user\": {\n     \"id\": 1,\n     \"username\": \"test\",\n     \"created_at\": \"2019-10-19 18:21:31\",\n     \"updated_at\": \"2019-10-19 18:21:31\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Username-Not-Found-Response",
          "content": "{\n     \"message\": \"Username is not in the system.\"\n}",
          "type": "json"
        },
        {
          "title": "Incorrect-Password",
          "content": "{\n     \"message\": \"Incorrect Password\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Username is not in the system</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotAuthorized",
            "description": "<p>Incorrect Password</p>"
          }
        ]
      }
    },
    "filename": "api/routes/auth/auth.routes.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/api/auth/register",
    "title": "Registers a New User",
    "version": "1.0.0",
    "name": "RegisterUser",
    "group": "Auth",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Registers a New User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The New Users username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The New Users password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The Newly Created User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 2,\n  \"username\": \"testuser\",\n  \"created_at\": \"2019-10-19 19:58:08\",\n  \"updated_at\": \"2019-10-19 19:58:08\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Username-Already-Taken",
          "content": "{\n     \"message\": \"Username is already taken\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameAlreadyTaken",
            "description": "<p>Username has already been taken</p>"
          }
        ]
      }
    },
    "filename": "api/routes/auth/auth.routes.js",
    "groupTitle": "Auth"
  }
] });
