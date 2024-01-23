import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PropType from "prop-types";

import classes from "./style.module.scss";

const Login = ({switchToRegister, onClose}) => {

    const userLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Login</h1>
            <form className={classes.formFields} onSubmit={userLogin}>
                <label htmlFor="email" className={classes.label}>Email</label>
                <TextField
                    id="email"
                    value={""}
                    onChange={() => { }}
                    type="email"
                    placeholder="Email"
                    required
                    className={classes.field}
                />
                <label htmlFor="password" className={classes.label}>Password</label>
                <TextField
                    id="password"
                    value={""}
                    onChange={() => { }}
                    type="password"
                    placeholder="Password"
                    required
                    className={classes.field}
                />
                <Button variant="contained" type="submit" className={classes.button}>
                    Login
                </Button>
                <Typography variant="body1" className={classes.footerText}>Don't have an account? Click <b className={classes.footerLink} onClick={switchToRegister}>Here</b></Typography>
            </form>
        </div>
    );
}

Login.propType = {
    switchToRegister: PropType.func.isRequired,
    onClose: PropType.func.isRequired
}

export default Login;