import { useRef } from 'react'
import { styled } from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutSideClick from './useOutSideClick';
import bookmark from "../../assets/Property 1=off.png"


const Modal = ({ onClose, img, title }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.();
  };

  useOutSideClick(modalRef, handleClose);
  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <CloseButton onClick={handleClose}>
            <p>X</p>
          </CloseButton>
          <Contents>
            <img src={img} alt="test" />
            <h1>{title}</h1>
            <Bookmark>
              <img src={bookmark} alt="bookmark" />
            </Bookmark>
          </Contents>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  )
}
const Bookmark = styled.span`
width: 50px;
height: 50px;
  img{
width: 50px;
height: 50px;
  }
`

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
  float: right;
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  p {
    font-weight: 800;
    color: black;
    font-size: 40px;
  }
`;

const Contents = styled.span`
  margin: 50px 30px;
  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  img {
    margin-top: 60px;
    width: 50%;
  }
`;



export default Modal