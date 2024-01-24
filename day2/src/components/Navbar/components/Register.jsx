import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropType from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import { useDispatch } from "react-redux"

import { emailRegex, encryptDataAES } from '@utils/allUtils';
import { doRegister, showPopup } from '@containers/App/actions';

import classes from "./style.module.scss";

const Register = ({switchToLogin, onClose}) => {
    const [formData, setFormData] = useState({fullname: "", email: "", password: ""});

    const intl = useIntl();
    const dispatch = useDispatch();

    const userRegister = (e) => {
        e.preventDefault();
        if(formData.fullname.length < 4) {
            dispatch(showPopup(intl.formatMessage({id: "register_validation_title"}), intl.formatMessage({id: "register_validation_name"})));
            return;
        } else if(!emailRegex.test(formData.email)) {
            dispatch(showPopup(intl.formatMessage({id: "register_validation_title"}), intl.formatMessage({id: "register_validation_email"})));
            return;
        }else if(formData.password.length < 6) {
            dispatch(showPopup(intl.formatMessage({id: "register_validation_title"}), intl.formatMessage({id: "register_validation_password"})));
            return;
        }
        
        const encryptedData = {
            fullname: encryptDataAES(formData.fullname),
            email: encryptDataAES(formData.email),
            password: encryptDataAES(formData.password)
        }

        dispatch(doRegister(encryptedData, () => {
            if(typeof switchToLogin === "function") {
                switchToLogin();
            }
        }));
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}><FormattedMessage id="register_title"/></h1>
            <form className={classes.formFields} onSubmit={userRegister}>
                <label htmlFor="fullname" className={classes.label}><FormattedMessage id="register_label_name"/></label>
                <TextField
                    id="fullname"
                    value={formData.fullname}
                    onChange={(e) => setFormData(prevVal => ({...prevVal, fullname: e.target.value}))}
                    type="text"
                    placeholder={intl.formatMessage({id: "register_plchldr_name"})}
                    className={classes.field}
                    required
                />
                <label htmlFor="email" className={classes.label}><FormattedMessage id="register_label_email"/></label>
                <TextField
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prevVal => ({...prevVal, email: e.target.value}))}
                    type="email"
                    placeholder={intl.formatMessage({id: "register_plchldr_email"})}
                    className={classes.field}
                    required
                />
                <label htmlFor="password" className={classes.label}><FormattedMessage id="register_label_password"/></label>
                <TextField
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prevVal => ({...prevVal, password: e.target.value}))}
                    type="password"
                    placeholder={intl.formatMessage({id: "register_plchldr_password"})}
                    className={classes.field}
                    required
                />
                <Button variant="contained" type="submit" className={classes.button}>
                    <FormattedMessage id="register_btn_login"/>
                </Button>
            </form>
        </div>
    );
}

Register.propType = {
    switchToLogin: PropType.func.isRequired,
    onClose: PropType.func.isRequired
}


export default Register;