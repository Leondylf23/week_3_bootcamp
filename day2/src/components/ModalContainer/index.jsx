import Modal from "@mui/material/Modal";
import PropType from "prop-types";

import classes from './style.module.scss';

function ModalContainer({ children, isOpen = false, handleClose, size = "medium" }) {

    function getContainerSize() {
        switch (size) {
            case "small":
                return classes.small;
            case "medium":
                return classes.medium;
            case "large":
                return classes.large;
            default:
                return classes.medium;
        }
    }
    return (
        <Modal className={classes.modal} open={isOpen} onClose={handleClose}>
            <div className={`${classes.modalContainer} ${getContainerSize()}`}>
                {children}
            </div>
        </Modal>
    );
}

ModalContainer.propTypes = {
    children: PropType.element.isRequired,
    isOpen: PropType.bool.isRequired,
    handleClose: PropType.func.isRequired,
    size: PropType.string
}

export default ModalContainer;