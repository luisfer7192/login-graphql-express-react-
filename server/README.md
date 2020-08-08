Example of Graphql for register an user.

```
mutation {
  addUser(user_name: "test", birth_date: "2007-12-03", email: "test@test.com", password: "1234") {
    user_name
    birth_date
    email
    password
    dateFormat
  }
}

{
  users {
    user_name
    birth_date
    email
    password
    dateFormat
  }
}
```
