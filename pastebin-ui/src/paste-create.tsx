import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function PasteCreate() {
  const [text, setText] = useState("");
  
  const updateText = (newText: string) => {
    setText(newText);
  }

  const save = async () => {
    const data = await fetch("http://localhost:3000/api/items/", {method: "POST", body: '{"content": "test message2222"}'})
    console.log(data);
  }

  return (
    <>
      <h1>{text}</h1>
      <div style={{marginBottom: "5%"}}>
        <textarea placeholder="test" value={text} onChange={(e) => updateText(e.target.value)} style={{width: "700px", height: "125px"}}></textarea>
      </div>
      <div>
        <button onClick={() => save()}>Save!</button>
      </div>
    </>
  )
}

export default PasteCreate
