const http = new EasyHttp();

http
    .get("http://jsonplaceholder.typicode.com/users")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));