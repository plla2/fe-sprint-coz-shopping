import { useRef } from 'react'
import useOutSideClick from '../../hooks/useOutSideClick'
import bookmark from "../../assets/Property 1=off.png"
import classes from "./Modal.module.css"


const Modal = ({ onClose, img, title }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);
  return (
    <div className={classes.overLay}>
      <div ref={modalRef} className={classes.modalWrap}>
        <p className={classes.closeBtn} onClick={handleClose} >X</p>
        <img className={classes.productImg} src={img} alt="test" />
        <h1>{title}</h1>
        <img className={classes.bookMarkImg} src={bookmark} alt="bookmark" />
      </div>
    </div>
  )
}

export default Modal