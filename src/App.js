import { useEffect, useState } from "react";
import GIFTranslation from "./GIFTranslation";
import Input from "./Input";
import "./index.css"

function App() {
   
  const [words, setWords] = useState([]);
  const [GIFsLinks, setGIFsLinks] = useState([]);

  useEffect(() => {
    setGIFsLinks([]);
    words.forEach(async (word) => {
      try {
          const res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${process.env.REACT_APP_APIKEY}&s=${word}`);
          const dataRes = await res.json();
          setGIFsLinks(prevState => [...prevState, dataRes.data.images.original.url]);

          console.log(GIFsLinks);

        } catch (error) {
          
        }
    })
  },[words]);

  return (
    <div id="container">
      <Input setWords = {setWords}/>
      <div id="gifsContainer">
        <GIFTranslation id="gifs" GIFsLinks = {GIFsLinks}/>
      </div>
      
    </div>
  );
}

export default App;
