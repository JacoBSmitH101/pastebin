import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useNavigate } from "react-router";
import './App.css'

function PasteCreate() {
  let navigate = useNavigate();
  const [text, setText] = useState("");
  const [views, setViews] = useState(-1);
  
  const updateText = (newText: string) => {
    setText(newText);
  }
  const updateViews = (newVal: number) => {
    setViews(newVal);
  }

  const save = async () => {
    const res = await fetch("http://localhost:3000/api/items/", {method: "POST", headers: {"Content-Type": "application/json"},
      body: `{"content": "${text}", "viewsLeft": "${views}"}`})
    const data = await res.json(); 
    navigate(`/paste/${data.id}`)
  }

  return (
    <>
      <h1>{text}</h1>
      <div style={{marginBottom: "5%"}}>
        <textarea placeholder="test" value={text} onChange={(e) => updateText(e.target.value)} style={{width: "700px", height: "125px"}}></textarea>
      </div>
      <div>
        <button onClick={() => save()} style={{marginRight: "10%"}}>Save!</button>
        <input type="number" value={views} onChange={(e) => updateViews(e.target.value)} style={{height: "30px"}}></input>
      </div>
    </>
  )
}

export default PasteCreate
