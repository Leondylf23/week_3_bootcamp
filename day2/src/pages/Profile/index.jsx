import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FormattedMessage } from "react-intl";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CardList from "@components/CardList";
import { defaultProfileImg } from "@static/images";
import { selectLoginInformation } from "@containers/Client/selectors";
import { selectMyPost } from "./selectors";
import { getMyPost } from "./actions";

import classes from "./style.module.scss";

function Profile({ loginInformation, myPosts }) {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({fullname: "", email: "", profileImage: ""});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setData(myPosts);
    }, [myPosts]);
    useEffect(() => {
        if(loginInformation) {
            setUserData(loginInformation);
        }
    },[loginInformation]);
    useEffect(() => {
        dispatch(getMyPost());
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}><FormattedMessage id="profile_title"/></h1>
            <div className={classes.profileContainer}>
                <Avatar alt="Ini Profile" src={userData?.profileImage != "" ? userData?.profileImage : defaultProfileImg} className={classes.avatar} />
                <Typography variant="h4" className={classes.name}>{userData.fullname}</Typography>
                <Typography variant="body2" className={classes.email}>{userData.email}</Typography>
                <Button variant="contained" className={classes.button} onClick={() => navigate("/newjourney")}>
                    <FormattedMessage id="profile_add_new_btn"/>
                </Button>
            </div>
            <CardList data={data} />
        </div>
    );
}

Profile.propType = {
    loginInformation: PropTypes.object,
    myPosts: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
    loginInformation: selectLoginInformation,
    myPosts: selectMyPost
});

export default connect(mapStateToProps)(Profile);