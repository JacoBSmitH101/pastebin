import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom"
import PasteCreate from "./paste-create"
import Paste from "./paste"
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  
  const updateText = (newText: string) => {
    setText(newText);
  }

  const save = () => {
    
  }

  return (
    <Routes>
      <Route path="/" element={<PasteCreate />} />
      <Route path="/paste/:id" element={<Paste />} />
    </Routes> 
 )
}

export default App 
