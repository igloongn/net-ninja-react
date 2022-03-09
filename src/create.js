
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = (props) => {
  const [title, settitle] = useState('')
  const [body, setbody] = useState('')
  const [author, setauthor] = useState('')
  const [Pending, setPending] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const Blog = { title, body, author }
    // console.log(Blog);

    setPending(true)

    fetch('http://localhost:1234/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Blog)
    }).then(() => {
      console.log('New blog added')
      setPending(false)
      // history.go(-1)
      history.push('/')

  })
}

return (
  <div>
    <center className='mt-5'><h2 className='create'>{props.text}</h2></center>
    <br />
    <div className='w-50 create'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Blog-Title: </label>
          <input
            type="text"
            placeholder='Title Here'
            required
            className=''
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        {/* <div>{title}</div> */}
        <div className='form-group'>
          <label>Blog-Body: </label>
          <textarea
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
          >

          </textarea>
        </div>
        {/* <div>{body}</div> */}
        <div className='form-group'>
          <label>Blog-Title: </label>
          <select
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          >
            <option value="Temitope">Temitope</option>
            <option value="God'slove">God'sLove</option>
          </select>
        </div>
        <div>{Pending && <div>Loading!!!</div>}</div>
        {/* <div>{author}</div> */}
        <div className='form-group'>
          {!Pending && <input
            type="submit"
            value='Add Blog'
            className='addform'
          />}
          {Pending && <input
            disabled
            type="submit"
            value='Addind Blog...'
            className='addform'
          />}
        </div>
      </form>
    </div>
  </div>
)
}

export default Create



