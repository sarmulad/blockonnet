import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader className="close">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null;


 



  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

const StyledModalTitle = styled.div`
  padding-top: 10px;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
  color: green;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  color: white;
`;

const StyledModal = styled.div`
  background: #222222;
  width: 700px;
  height: 500px;
  border-radius: 15px;
  padding: 15px;
  @media (max-width: 1200px) {
    margin: 0px 30px;
  }
`;
const StyledModalOverlay = styled.div`

    position: fixed;
    z-index: 9999;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #00000040;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
`;

export default Modal;