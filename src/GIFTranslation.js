function GIFTranslation({GIFsLinks}) {
  return (
      GIFsLinks.map((url)=>{
            return <img src={url} alt="gif" key={url}/>
        })
    )
}

export default GIFTranslation