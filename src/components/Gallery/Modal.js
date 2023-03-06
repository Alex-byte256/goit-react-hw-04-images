import css from './Modal.module.css'
import PropTypes from 'prop-types';
import { useEffect} from 'react';


function Modal ({ keyClose,onClickOverlay ,largeImg}){


  useEffect(()=>{
    window.addEventListener('keydown', e =>{
      if(e.code ==="Escape"){
        keyClose()
      }
    })
  },)

    return(
      <div  onClick={onClickOverlay} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImg} alt="" />
        </div>
      </div>
    )

}

Modal.propTypes = {
  keyClose: PropTypes.func,
  onClickOverlay: PropTypes.func,
  largeImg: PropTypes.string
}

export default Modal;
