import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const PostLayout = () => {
  return (
    <div>
        <Link to="/postpage/1">Post 1</Link>
            <br></br>
            <Link to="/postpage/2">Post 2</Link>
            <Link to="/postpage/3">Post 3</Link>
            <Link to="/postpage/newpost">NEWPOST</Link>
   <Outlet/>
    </div>
  )
}

export default PostLayout
