
import {  useState } from "react";
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { FormattedMessage, useIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { selectLogin } from "@containers/Client/selectors";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./style.module.scss";
import TextField from '@mui/material/TextField'
import { addNewJourney } from "./actions";
import { showPopup } from "@containers/App/actions";

const initialFormData = {
    imageUrl: null,
    title: "",
    shortDesc: "",
    description: ""
}

function NewJourney({ token }) {
    const [formData, setFormData] = useState(initialFormData);

    const intl = useIntl();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function fileOnChange(e) {
        const file = e.target.files[0];
        const fileGenericType = file.type.split("/")[0];
        if (fileGenericType != "image") {
            dispatch(showPopup('Error', intl.formatMessage({id: "file_error"})));
            return;
        }
        setFormData(prevVal => ({ ...prevVal, imageUrl: file }));
    }

    function deleteFile() {
        setFormData(prevVal => ({ ...prevVal, imageUrl: null }));
    }

    function sendPostData() {
        const formDataSend = new FormData();
        formDataSend.append("imageUrl", formData.imageUrl);
        formDataSend.append("title", formData.title);
        formDataSend.append("shortDesc", formData.shortDesc);
        formDataSend.append("description", formData.description);

        dispatch(addNewJourney(token, formDataSend, () => {
            navigate("/profile");
        }));
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}><FormattedMessage id="new_journey_title"/></h1>
            <div className={classes.inputForms}>
                <div className={classes.imgInput}>
                    {formData.imageUrl ?
                        <>
                            <img src={URL.createObjectURL(formData.imageUrl)} className={classes.imgData} />
                            <Button variant="contained" color="error" className={classes.deleteButton} onClick={deleteFile}>
                                <FormattedMessage id="new_journey_delete_btn"/>
                            </Button>
                        </>
                        :
                        <>
                            <label htmlFor="photo-file" className={classes.imgFileInput}>
                                <AddPhotoAlternateIcon />
                                <b><FormattedMessage id="new_journey_add_photo"/></b>
                            </label>
                            <input id="photo-file" type="file" accept="image/*" hidden onChange={fileOnChange} />
                        </>
                    }
                </div>
                <label htmlFor="title" className={classes.inputLabel}><FormattedMessage id="new_journey_label_title"/></label>
                <TextField
                    id="title"
                    value={formData.title}
                    placeholder={intl.formatMessage({id: "new_journey_plchldr_title"})}
                    className={classes.textField}
                    onChange={(e) => setFormData(prevVal => ({ ...prevVal, title: e.target.value }))}
                />
                <label htmlFor="short-desc" className={classes.inputLabel}><FormattedMessage id="new_journey_label_short_desc"/></label>
                <TextField
                    id="short-desc"
                    multiline
                    rows={4}
                    value={formData.shortDesc}
                    placeholder={intl.formatMessage({id: "new_journey_plchldr_short_desc"})}
                    className={classes.textField}
                    onChange={(e) => setFormData(prevVal => ({ ...prevVal, shortDesc: e.target.value }))}
                />
                <label htmlFor="short-desc" className={classes.inputLabel}><FormattedMessage id="new_journey_label_desc"/></label>
                <ReactQuill theme="snow" value={formData.description} onChange={(value) => setFormData(prevVal => ({ ...prevVal, description: value }))} className={classes.quillField} />
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={sendPostData}>
                        <FormattedMessage id="new_journey_post_btn"/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    token: selectLogin
});

export default connect(mapStateToProps)(NewJourney);