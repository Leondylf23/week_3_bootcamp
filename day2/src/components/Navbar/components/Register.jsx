import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropType from "prop-types";

import classes from "./style.module.scss";

const Register = ({switchToLogin, onClose}) => {

    const userRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Register</h1>
            <form className={classes.formFields} onSubmit={userRegister}>
                <label htmlFor="name" className={classes.label}>Full Name</label>
                <TextField
                    id="name"
                    value={""}
                    onChange={() => { }}
                    type="text"
                    placeholder="Full Name"
                    className={classes.field}
                    required
                />
                <label htmlFor="email" className={classes.label}>Email</label>
                <TextField
                    id="email"
                    value={""}
                    onChange={() => { }}
                    type="email"
                    placeholder="Email"
                    className={classes.field}
                    required
                />
                <label htmlFor="password" className={classes.label}>Password</label>
                <TextField
                    id="password"
                    value={""}
                    onChange={() => { }}
                    type="password"
                    placeholder="Password"
                    className={classes.field}
                    required
                />
                <Button variant="contained" type="submit" className={classes.button}>
                    Register
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