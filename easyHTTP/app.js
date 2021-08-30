const http = new easyHttp();

//Get request

http.get("http://jsonplaceholder.typicode.com/posts", function(err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});