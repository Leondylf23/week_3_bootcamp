
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import classes from "./style.module.scss";
import TextField from '@mui/material/TextField'

const initialFormData = {
    file: null,
    title: "",
    shortDescription: "",
    description: ""
}

function NewJourney() {
    const [formData, setFormData] = useState(initialFormData);

    function fileOnChange(e) {
        const file = e.target.files[0];
        const fileGenericType = file.type.split("/")[0];
        if (fileGenericType != "image") {
            console.log("not img");
            return;
        }
        setFormData(prevVal => ({ ...prevVal, file: file }));
    }
    function deleteFile() {
        setFormData(prevVal => ({ ...prevVal, file: null }));
    }

    useEffect(() => {
        
    }, [formData]);

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}>New Journey</h1>
            <div className={classes.inputForms}>
                <div className={classes.imgInput}>
                    {formData.file ?
                        <>
                            <img src={URL.createObjectURL(formData.file)} className={classes.imgData} />
                            <Button variant="contained" color="error" className={classes.deleteButton} onClick={deleteFile}>
                                Delete
                            </Button>
                        </>
                        :
                        <>
                            <label htmlFor="photo-file" className={classes.imgFileInput}>
                                <AddPhotoAlternateIcon />
                                <b>Add photo here</b>
                            </label>
                            <input id="photo-file" type="file" accept="image/*" hidden onChange={fileOnChange} />
                        </>
                    }
                </div>
                <label htmlFor="title" className={classes.inputLabel}>Title</label>
                <TextField
                    id="title"
                    value={formData.title}
                    placeholder="Your title"
                    className={classes.textField}
                    onChange={(e) => setFormData(prevVal => ({ ...prevVal, title: e.target.value }))}
                />
                <label htmlFor="short-desc" className={classes.inputLabel}>Short Description</label>
                <TextField
                    id="short-desc"
                    multiline
                    rows={4}
                    value={formData.shortDescription}
                    placeholder="Your short description"
                    className={classes.textField}
                    onChange={(e) => setFormData(prevVal => ({ ...prevVal, shortDescription: e.target.value }))}
                />
                <label htmlFor="short-desc" className={classes.inputLabel}>Description</label>
                <ReactQuill theme="snow" value={formData.description} onChange={(value) => setFormData(prevVal => ({ ...prevVal, description: value }))} className={classes.quillField} />
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" className={classes.button} onClick={deleteFile}>
                        Post
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default NewJourney;