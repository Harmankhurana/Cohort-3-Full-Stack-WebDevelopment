import PostComponent from './Post.jsx'

function App() {
    // In memory array for keeping the post
    const posts = [{
          name : "Harman",
          subtitle : "156k followers",
          time : "2m ago",
          image : "https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750",
          description : "What to know to win big? Check out how these folks won $6000 in bounties",
    },]

  function addPost() {

  }
  return(
    <div style={{background : "#def6e9", height : "100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display : "flex", justifyContent : "center"}}>
        <PostComponent 
          name = {"Harman"}
          subtitle = {"156k followers"}
          time = {"2m ago"}
          image = {"https://images.ctfassets.net/ub3bwfd53mwy/5zi8myLobtihb1cWl3tj8L/45a40e66765f26beddf7eeee29f74723/6_Image.jpg?w=750"}
          description = {"What to know to win big? Check out how these folks won $6000 in bounties"}
        />
      </div>
    </div>
  )
}

export default App