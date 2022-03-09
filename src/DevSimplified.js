import React, { useEffect, useState } from 'react'

const Button = () => {
    const oldText="User"
    const [text, settext] = useState(oldText)
    const temi=() => settext('Temitope')
    const judi=() => settext('Judikay')
    const mufa=() => settext('Mufasa')
    const [word, setword] = useState('This is not for the useEffect')
    const god=() => setword('God\'sLove')
    const seyi=() => setword('Oluwaseyi')
    const ola=() => setword('Olawale')

    const [resource, setresource] = useState('posts')
    const comments=() => setresource('comments')
    const photo=() => setresource('photos')
    const todo=() => setresource('todos')

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resource}`).then((res) => res.json()).then((data) => console.log(data))
    }, [resource])
    
    const [windowwidth, setwindowwidth] = useState(window.innerWidth)
    const handlewidth= () => {
        setwindowwidth(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', handlewidth)
    })




    

return (
        <div>
            <div>
                <button onClick={temi} type="button">Temitope</button>
                <button onClick={judi} type="button">Judikay</button>
                <button onClick={mufa} type="button">Mufasa</button>
            </div>
            <h2>Hello {text}</h2>

            <div>
                <button onClick={god} type="button">God'sLove</button>
                <button onClick={seyi} type="button">Oluwaseyi</button>
                <button onClick={ola} type="button">Olawale</button>
            </div>
            <h2>{word}</h2>

            <div>
                <button onClick={comments} type="button">Comments</button>
                <button onClick={photo} type="button">Photos</button>
                <button onClick={todo} type="button">Todo</button>
            </div>
            <h2>{windowwidth}</h2>




        </div>
    )
}

export default Button