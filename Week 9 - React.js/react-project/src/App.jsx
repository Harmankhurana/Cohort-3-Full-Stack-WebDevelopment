import { useState } from "react";
import PostComponent from "./Post.jsx";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  // Making like a spread operator let x = [1, 2, 3];
  // let y = [...x, 4]; --> [1, 2, 3, 4]

  // this [...posts, {} ] --> do the same thing here, as it adds all the posts

  function addPost() {
    setPosts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App
