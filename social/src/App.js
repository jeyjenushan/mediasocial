import { useEffect, useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import Post from "./Post";
import PostLayout from "./PostLayout";
import PostPage from "./PostPage";
import {Routes,Route, Link, Navigate, useNavigate} from 'react-router-dom'
import Feed from "./Feed";
import { format } from "date-fns";


function App() {
  const[posts,setPosts]=useState([
    {
      id:1,
      title:"My first Post",
      datetime:"July 01,2021 11:17:35 AM",
      body:"Make a video about Tesla q1 results"
    },
    {
      id:2,
      title:"My second Post",
      datetime:"July 01,2021 11:17:35 AM",
      body:"Make a video about Tesla q1 results"
    },
    {
      id:3,
      title:"My Third Post",
      datetime:"July 01,2021 11:17:35 AM",
      body:"Make a video about Tesla q1 results"
    },
    {
      id:4,
      title:"My fourth Post",
      datetime:"July 01,2021 11:17:35 AM",
      body:"Make a video about Tesla q1 results"
    },
    {
      id:5,
      title:"My fifth Post",
      datetime:"July 01,2021 11:17:35 AM",
      body:"Make a video about Tesla q1 results"
    }
  ])
  const[search,setSearch]=useState('');
  const[searchResults,setSearchResults]=useState([])
  const[postTitle,setPostTitle]=useState('');
  const[postBody,setPostBody]=useState('');
  const navigate=useNavigate()


  useEffect(()=>{
    const filteredResults=posts.filter(post=>(
      (post.body).toLowerCase()).includes(search.toLowerCase())
  || ((post.title).toLowerCase()).includes(search.toLowerCase()))

  setSearchResults(filteredResults.reverse());
},[posts,search])

const handleSubmit=(e)=>{
  e.preventDefault()
  const id=posts.length?posts[posts.length-1].id+1:1
  const datetime=format(new Date(),'MMMM dd,yyyypp')
  const newPost={id,title:postTitle,datetime,body:postBody};
  const allPosts=[...posts,newPost]
  setPosts(allPosts)
  setPostTitle('');
  setPostBody('')
  navigate("/")

}
const handleDelete=(id)=>{
  const postsList=posts.filter(post=>post.id!==id);
  setPosts(postsList)
  navigate("/")
}

  return (

    <div className="App">
       <Header title="Social Media App"/>
       <Nav 
       search={search}
       setSearch={setSearch}
       />
       <Routes>

     <Route path="/" element={
       <Home posts={searchResults}/>}/>
       <Route path="post"> 
       <Route index element={
       <NewPost
       handleSubmit={handleSubmit}
       postTitle={postTitle}
       postBody={postBody}
       setPostTitle={setPostTitle}
       setPostBody={setPostBody}
       
       />}/>
       <Route path=":id" element={<PostPage posts={posts} 
       handleDelete={handleDelete}
       />}/>
       </Route>

     
<Route path="about" element={<About/>}/>
<Route path="*" element={<Missing/>}/>
   </Routes>
    </div>
  );
}

export default App;
