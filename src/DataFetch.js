import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetch() {
    const [posts,setposts] = useState([]);
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => {
            console.log(res)
            setposts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  return (
    <div>
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>{post.email}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default DataFetch