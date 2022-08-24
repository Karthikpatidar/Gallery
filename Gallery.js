import React, { useEffect, useState } from 'react'
import Imagecard from './Imagecard'
import axios from 'axios'

const Gallery = () => {
  const [Data, setData] = useState(null)


  useEffect(()=>{
      getimages()
  },[])

  const getimages = async()=>{
    let imgs =  await axios.get("https://picsum.photos/v2/list?page=2&limit=13")
    setData(imgs.data)
}


  return (
    <div> 

         <h2 style={{color: 'blue', backgroundColor: " rgb(65, 166, 65)",color:"white",width:"400px",height:"70px",borderRadius:"13px",alignItems:"center",display:"flex",justifyContent:"center",boxShadow:"2px 2px 3px 2px rgb(186, 186, 186)",marginLeft:"500px",marginTop:"30px"}}>Gallery App</h2>
        {Data && Data.map((elem)=>{
           return(<Imagecard url={elem.download_url} author={elem.author} key={elem.id} id={elem.id}/>)
        })}

      
       
    </div>
  )
}

export default Gallery