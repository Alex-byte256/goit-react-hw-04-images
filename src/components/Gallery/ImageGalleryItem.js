import {  useState } from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';


function ImageGalleryItem (props){

  const[modal,setModal] = useState(false)


  const handleOnClick=()=>{
    setModal(true)
  }

 const keyClose=()=>{
    setModal(false)
  }

  const handleOnClickClose=(e)=>{
    if(e.target === e.currentTarget){
      setModal(false)
    }
  }






    return(
<>
  <li onClick={handleOnClick} className="ImageGalleryItem">
    <img src={props.webformatURL} alt="" />
  </li>
  {modal?<Modal keyClose={keyClose} onClickOverlay={handleOnClickClose} largeImg={props.largeImg}/>:""}
</>

    )

}

ImageGalleryItem.propTypes = {
  largeImg: PropTypes.string,
  webformatURL: PropTypes.string,
}

export default ImageGalleryItem
