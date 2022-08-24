import React, { useState,useEffect } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import './Imageinfo.css'

export const Imageinfo = () => {
    const [Image, setImage] = useState(null)

    const {id} = useParams()

    const GetSingleImage = async () => {
        const { imgs } = await axios.get(`https://picsum.photos/id/${id}/info`);
        // setImage(imgs.data);
        console.log(imgs)
    };

    useEffect(() => {
        GetSingleImage();
    }, []);

  return (
    <div className='main'>
        <div className='image-card'>
        <img height="500" src={Image && Image.download_url} alt="" />
        <h3>{Image && Image.download_url}</h3>
        <a target="_blank" href={Image && Image.url}>
                Open in browser
            </a>{" "}
            <br /> <br />
            <Link className="btn btn-danger" to="/">
                home
            </Link>
        </div>
      
    </div>
  )
}

export default Imageinfo;
