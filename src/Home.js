import React, { useEffect } from 'react'
import { useState } from 'react'
import BlogList from './BlogList'
const Home = ({ text }) => {


    const oldblogs = [
        // { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        // { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]
    const [blogs, setBlogs] = useState(null)
    const [name, setname] = useState('Mario')
    const [pending, setpending] = useState(true)
    const changename = () => {
        setname('Temitope New')
    }

    useEffect((e) => {
        // console.log('This effect Ran');
        setTimeout(() => {
            fetch('http://localhost:1234/blogs').then(res=>{
                console.log(res)
                if (!res.ok) {
                    throw new Error('Could Not Fetch the data from the backend')
                }
                return res.json()
            }).then(res => {
                console.log(res)
                setBlogs(res)
                setpending(false)
            }).catch((err) => {
                console.log('This is the real Error: '+err)
            })
        }, 1000);
      },[])
    
    const handleDelete=(id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home container">
            { pending && <div>Loading...</div>}
            {blogs && <BlogList list={blogs} handleDelete={handleDelete}/>}
            {/* <BlogList list={blogs.filter((blog) => blog.author ==='mario')} handleDelete={handleDelete}/> */}
            {/* <center><h2>{name}</h2></center> */}
            {/* <button onClick={changename}>Click to change name</button> */}
        </div>
    )
}

export default Home