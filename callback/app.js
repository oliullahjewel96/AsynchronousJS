const Posts = [
    { title: " Post one", body: "This is the post one" },
    { title: " Post two", body: "This is the post two" },
];

// function createPost(post) {
//     setTimeout(function() {
//         Posts.push(post);
//     }, 2000);
// }

// function getPosts() {
//     setTimeout(function() {
//         let output = "";
//         Posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({ title: "Post three", body: "This is the post three" });

// getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        Posts.push(post);
        callback();
    }, 2000);
}

function getPosts() {
    setTimeout(function() {
        let output = "";
        Posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({ title: "Post three", body: "This is the post three" }, getPosts);