import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useParams } from "react-router"
import './App.css'

function Paste() {
  let { id } = useParams(); 
  const [text, setText] = useState("");

  const load = async () => {
    const res = await fetch(`http://localhost:3000/api/items/${id}`, {method: "GET"})
    const data = await res.json();
    setText(data.content);
  }

  useEffect(() => {
    load();
  }, [id]);
  return (
    <>
      <h2>{text}</h2> 
    </>
  )
}

export default Paste
