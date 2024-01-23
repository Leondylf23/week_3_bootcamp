import classes from "./style.module.scss";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Login = () => {

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
                    className={classes.field}
                />
                <label htmlFor="password" className={classes.label}>Password</label>
                <TextField
                    id="password"
                    value={""}
                    onChange={() => { }}
                    type="password"
                    placeholder="Password"
                    className={classes.field}
                />
                <Button variant="contained" type="submit" className={classes.button}>
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;