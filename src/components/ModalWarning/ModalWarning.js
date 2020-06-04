import ClassNames from "classnames";
import { ReactComponent as WarningLogo } from "images/icon/warning.svg";
import PropTypes from "prop-types";
import React from "react";
import Modal from "react-bootstrap/Modal";
import BaseButton from "../BaseButton";
import "./ModalWarning.scss";

const ModalWarning = (props) => {
  const {
    show, close, centered, body, title, cancelText, className, inverseButton,
    acceptText,
    cancel = () => {},
    accept = () => {}
  } = props;
  const handleClose = () => {
    close(false);
    cancel();
  };
  const handleAccept = () => {
    close(false);
    accept();
  };
  
  return (
    <Modal show={show}
           backdropClassName={"modal-warning-backdrop"}
           className={ClassNames("modal-warning", className)}
           onHide={handleClose}
           backdrop={"static"}
           centered={centered}
    >
      <Modal.Header className={"text-center"}>
        <Modal.Title className={"paragraph-heading-charcoal"}><WarningLogo className={"logo"}/>{title}</Modal.Title>
      </Modal.Header>
      
      <Modal.Body className={"paragraph-small text-center"}>
        {body}
      </Modal.Body>
      
      <Modal.Footer className={"justify-content-center"}>
        {inverseButton ?
          <div className={"d-flex justify-content-center m-0"}>
            {cancelText && <div className={"btn-wrapper"}>
              <BaseButton className={"button-smalls-white"} variant="orange" content={cancelText} onClick={handleClose}/>
            </div>}
            {acceptText && <div className={"btn-wrapper"}>
              <BaseButton className={"button-smalls-white"} variant="dusk-blue" content={acceptText} onClick={handleAccept}/>
            </div>}
          </div>
          :
          <div className={"d-flex justify-content-center m-0"}>
            {acceptText && <div className={"btn-wrapper"}>
              <BaseButton className={"button-smalls-white"} variant="orange" content={acceptText} onClick={handleAccept}/>
            </div>}
            {cancelText && <div className={"btn-wrapper"}>
              <BaseButton className={"button-smalls-white"} variant="dusk-blue" content={cancelText} onClick={handleClose}/>
            </div>}
          </div>
        }
      
      </Modal.Footer>
    </Modal>
  );
};

ModalWarning.propTypes = {
  show: PropTypes.bool,
  inverseButton: PropTypes.bool,
  body: PropTypes.any,
  title: PropTypes.any,
  centered: PropTypes.bool,
  className: PropTypes.string,
  cancelText: PropTypes.string,
  acceptText: PropTypes.string.isRequired,
  close: PropTypes.func,
  accept: PropTypes.func,
  cancel: PropTypes.func
};

ModalWarning.defaultProps = {
  show: false,
  centered: true,
  inverseButton: false,
  className: "",
  body: "",
  title: "",
  closeText: null,
  acceptText: null
};

export default ModalWarning;
