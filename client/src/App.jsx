import { useState,useRef, useEffect} from 'react'
import bgpic from './assets/bgpic.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import { uploadFile } from './services/api'

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  const onUploadClick= ()=>{
    fileInputRef.current.click();
  }
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data= new FormData();
        data.append("name",file.name);
        data.append("file",file);

        let response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])
  
  console.log(file);

  return (
    <div className='container'>
      <img src={bgpic} alt="Could not load image" />
      <div className='wrapper'>
        <h1>FileShare</h1>
        <p>Upload and share the download link.</p>
        <button onClick={onUploadClick}>Upload</button>
        <input type="file" ref={fileInputRef} onChange={(e)=>{setFile(e.target.files[0])}} style={{display:'none'}}/>
        <p>Use the link below to download the file:</p>
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  )
}

export default App
