import React,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        console.log("UI rendering done")
    },[])

    function textHandler(event) {
        setText(event.target.value);
        console.log(text)
    }
  return (
    <div>
      <input type="text" onChange={textHandler} ></input>
      hello jee
    </div>
  )
}

export default UseEffect
