import Modal from "@mui/material/Modal";
import PropType from "prop-types";

import classes from './style.module.scss';

function ModalContainer({ children, isOpen = false, handleClose }) {
    return (
        <Modal className={classes.modal} open={isOpen} onClose={handleClose}>
            <div className={classes.modalContainer}>
                {children}
            </div>
        </Modal>
    );
}

ModalContainer.propTypes = {
    children: PropType.element.isRequired,
    isOpen: PropType.bool.isRequired,
    handleClose: PropType.func.isRequired,
}

export default ModalContainer;