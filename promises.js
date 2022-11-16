// const posts = [
//   { title: "Post One", body: "This is post one" },

//   { title: "Post Two", body: "This is post two" },
// ];

// function getPost() {
//   setTimeout(() => {
//     let output = "";

//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });

//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;

//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: somthing went wrong");
//       }
//     }, 2000);
//   });
// }

// // createPost({ title: "Post Three", body: "This is post three" })
// //   .then(getPost)

// //   .catch((err) => console.log(err));

// //Promise.all
// const promise1 = Promise.resolve('Hello World')
// const promise2 = 10
// const promise3 = new Promise((resolve, reject) => 
//   setTimeout(resolve, 2000, 'GoodBye')
// )

// Promise.all([promise1, promise2, promise3]).then(((values) => console.log(values)))




createPost(){
    return new promise(() => {
        //update lastactivitytime
    })
}

seensomeonemessage(){
    return new promise(() => {
        //update lastactivitytime
    })
}

updateprofilephoto(){
    return new promise(() => {
        //update lastactivitytime
    })
}

const user = {
    username: 'yash',
    lastactivitytime: '13 of jan'
}

updatelastactivitytime = {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            User.lastactivitytime = new Date().getTime();
            resolve(User.lastactivitytime)
        }, 1000)
    })
}

userupdatespost(){
    Promise.all([createPost, updatelastactivitytime])
    .then(([createpostresolves, updatelastactivitytimeresolve]) => {
        console.log(updatelastactivitytimeresolve);
    })
    .catch(err => console.log(err))
}
