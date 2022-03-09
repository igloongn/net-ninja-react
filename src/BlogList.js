import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BlogList = ({list, handleDelete}) => {
    
    if (list.length === 0) {
        return(
            <h1><center>No Blogs available at the moment</center></h1>
        )
    }
    return (
        <div className='blog-list'>
            <div>{list.map((item, index) => {
                return (
                    <pre className='blog-preview' key={item.id}>
                        <h2>{item.id}</h2>
                        <h2>{item.title}</h2>
                        {/* <p>Written by {item.author}</p> */}
                        <p>Written by {item.body}</p>
                        <Link to={`/blogs/${item.id}`}><button className='btn btn-warning '>View Blog</button></Link>
                        <br />
                        <br />
                        <button className='btn btn-danger' onClick={() => {handleDelete(item.id)}}>Delete Blog</button>
                    </pre>
                )
            })}</div>

        </div>
    )
}

export default BlogList


