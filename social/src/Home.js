import React from "react";
import Feed from "./Feed";
//after total completeing study jus modify this page because we have add some modification in this page but fully clear after
const Home=({posts})=>{
    return(
        <main className="Home">
            {posts.length?
        (<Feed posts={posts}/>):
        (
            <p style={{marginTop:"2rem"}}>
                No posts to display
            </p>
        )    
        }
        </main>
    )
}
export default Home