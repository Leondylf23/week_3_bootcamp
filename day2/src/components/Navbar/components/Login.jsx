import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PropType from "prop-types";
import { FormattedMessage, useIntl } from "react-intl";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import classes from "./style.module.scss";
import { doLogin, showPopup } from '@containers/App/actions';
import { encryptDataAES } from '@utils/allUtils';

const Login = ({switchToRegister, onClose}) => {
    const [formData, setFormData] = useState({email: "", password: ""});

    const intl = useIntl();
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();

        if(formData.email === "" || formData.password === "") {
            dispatch(showPopup(intl.formatMessage({id: "login_validation_title"}), intl.formatMessage({id: "login_validation_required"})))
        }

        const encryptedData = {
            email: encryptDataAES(formData.email),
            password: encryptDataAES(formData.password)
        }

        dispatch(doLogin(encryptedData, () => {
            if(typeof onClose === 'function') {
                onClose();
            }
        }))
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}><FormattedMessage id="login_title"/></h1>
            <form className={classes.formFields} onSubmit={userLogin}>
                <label htmlFor="email" className={classes.label}><FormattedMessage id="login_label_email"/></label>
                <TextField
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prevVal => ({...prevVal, email: e.target.value}))}
                    type="email"
                    placeholder={intl.formatMessage({id: "login_plchldr_email"})}
                    required
                    className={classes.field}
                />
                <label htmlFor="password" className={classes.label}><FormattedMessage id="login_label_password"/></label>
                <TextField
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prevVal => ({...prevVal, password: e.target.value}))}
                    type="password"
                    placeholder={intl.formatMessage({id: "login_plchldr_password"})}
                    required
                    className={classes.field}
                />
                <Button variant="contained" type="submit" className={classes.button}>
                    <FormattedMessage id="login_btn_login"/>
                </Button>
                <Typography variant="body1" className={classes.footerText}><FormattedMessage id="login_not_have_acc"/><b className={classes.footerLink} onClick={switchToRegister}><FormattedMessage id="login_not_have_acc_here"/></b></Typography>
            </form>
        </div>
    );
}

Login.propType = {
    switchToRegister: PropType.func.isRequired,
    onClose: PropType.func.isRequired
}

export default Login;