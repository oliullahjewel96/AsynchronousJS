const http = new EasyHttp();

//Get users
// http
//     .get("http://jsonplaceholder.typicode.com/users")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//User data

const data = {
    name: "Oli Ullah",
    username: "oliullah",
    email: "oli@gmail.com",
};

//Create User
// http
//     .post("http://jsonplaceholder.typicode.com/users", data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//Update post
// http
//     .put("http://jsonplaceholder.typicode.com/users/2", data)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//Delete user

http
    .delete("http://jsonplaceholder.typicode.com/users/2")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));