import React from 'react'
import './Imagecard.css'
import {Link} from 'react-router-dom'


const Imagecard = ({url,author,key,id}) => {
  return (
    
    

<div className='mainclass'>
<div className="card" >
  <div className='card-img-body'>
  <img src={url} className="card-img-top" alt="..."/>
  </div>
  <div className='overlay'>
 <div className="card-body">
    <h4 className="card-text">{author}</h4>
    
    <Link to={`/info/${id}`}> <button className='button'>Image Info.</button></Link>
  </div>
 </div>
</div>
</div>


  )
}

export default Imagecard