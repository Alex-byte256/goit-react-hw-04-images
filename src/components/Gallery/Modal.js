import css from './Modal.module.css'
import PropTypes from 'prop-types';
import { useEffect } from 'react';


function Modal (props){

  useEffect(()=>{
    window.addEventListener('keydown', e =>{
      if(e.code ==="Escape"){
        this.props.keyClose();
      }
    })
  },[])

    return(
      <div  onClick={props.onClickOverlay} className={css.overlay}>
        <div className={css.modal}>
          <img src={props.largeImg} alt="" />
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
