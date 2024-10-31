import React from "react";
import {Link, useParams} from 'react-router-dom'
import Edit from "./Edit";
const PostPage=({posts,handleDelete})=>{
    const {id}=useParams();
    const post=posts.find(post=>(post.id).toString()==id);

    return(
        <main className="PostPage">
            <article className="post">
                {
                    post &&
                    <>
                    <h2>{post.title}</h2>
                    <p className="postDate">
                        {post.datetime}
                    </p>
                    <p className="postBody">
                        {post.body}
                    </p>
                    <button className="deletebutton" onClick={()=>handleDelete(post.id)}>Delete Post</button>
                   <Link to={`/edit/${post.id}`}><button className="editbutton">Edit Post</button></Link>
                    </>
                }
                {!post && 
                <>
                           <h2>Page Not Found</h2>
            <p>Well that's disappoining</p>
            <p>Visit our Homepage</p>
            <p>
                <Link to="/">Visit our home page</Link>
            </p>
                </>
                
                }

            </article>
  
          
        </main>
    )
}
export default PostPage