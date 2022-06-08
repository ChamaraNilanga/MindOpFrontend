import "./post.css";
import { Link } from 'react-router-dom';
import axios from "axios";
import React,{ useState, useEffect } from "react";
import TopBar from "../topbar/TopBar";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Post() {

    const [blogs,setBlogs] = useState([]);
    
    useEffect(()=>{
        function getAllBlogs(){
            axios.get("/blog/").then((res)=>{
                console.log(res);
            setBlogs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getAllBlogs();
    },[])


  return (
 
    <div className="row m-2"> 
<div className="post">

{blogs.map(blog => {
  return(
    <div className="postInfo">

<TopBar/>
      <div className="col-sm-2 col-md-12 v my-2" key={blog.blogid}>

      <img className="postImg" 
    src="https://images.unsplash.com/photo-1598929440520-dc9f18462281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
    alt=""/>
      <div className="card shadow-sm w-100" style={{ maxWidth: 425, maxHeight: 305,  minHeight: 305 }}>

 
      <div className="card-body" style={{ maxWidth: 350}}>

 

  <Link to="/singlepost/" className="nav-link">
      <span className="postTitle" key={blog.blogid}>
      {blog.blogtitle}
      </span>
      </Link>
      <hr/>
      <span className="postDate">
          1 hour ago
      </span>

      
      <Link to="/singlepost/" className="nav-link">
      <p className="postDesc" key={blog.blogid}>
      {blog.body}
      </p>
      
       </Link>
      
      
      </div>
      </div>
                     </div>
                     </div>
                     

  )

                    
})}

</div>
</div>

  )
}