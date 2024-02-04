function createPost(user, postContent) {
    return new Promise((resolve, reject) => {
      // Simulating post creation, assuming it takes 1 second
      setTimeout(() => {
        const post = { user, content: postContent };
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      // Simulating updating user activity time, assuming it takes 1 second
      setTimeout(() => {
        const lastActivityTime = new Date().toISOString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulating post deletion, assuming it takes 1 second
      setTimeout(() => {
        resolve("Post deleted successfully");
      }, 1000);
    });
  }
  
  // User creates a post
  createPost("John Doe", "Hello World!")
    .then(post => {
      // Update user's last activity time
      return updateLastUserActivityTime("John Doe")
        .then(lastActivityTime => {
          console.log("User's last activity time updated:", lastActivityTime);
          // Log posts and last activity time after both promises are resolved
          console.log("Posts:", [post]);
          console.log("Last Activity Time:", lastActivityTime);
  
          // Delete the last post
          return deletePost(post)
            .then(deletionResult => {
              console.log(deletionResult);
              // Log remaining posts after successful deletion
              console.log("Remaining Posts: []");
            });
        });
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
  