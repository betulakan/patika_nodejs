
const posts = [
  {
    name: "First Blog Post!",
    author: "Betül",
    description: "This is my first blog post!",
  },
  {
    name: "Travel Guide",
    author: "Betül",
    description: "What to do in your summer Europe trip.",
  },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name + "    ~~~    " + post.description);
  });
};

const addNewPost = (newPost) => {
  const promise = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    //reject("An error occured :(");
  });
  return promise;
};

async function showPosts() {
  try {
    await addNewPost({
      name: "Books to read this fall",
      author: "New User",
      description: "Must reads before ending 2024",
    });
    listPosts();
  } catch (error) {
    console.error(error);
  }
}

showPosts();
