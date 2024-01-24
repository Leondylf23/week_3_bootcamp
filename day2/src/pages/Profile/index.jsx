import { useEffect, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FormattedMessage, useIntl } from "react-intl";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";

import CardList from "@components/CardList";
import { defaultProfileImg } from "@static/images";
import { selectLoginInformation } from "@containers/Client/selectors";
import { selectMyPost } from "./selectors";
import { getMyPost, setNewProfilePicture } from "./actions";
import { showPopup } from "@containers/App/actions";

import classes from "./style.module.scss";
import { setNewProfileImg } from "@containers/Client/actions";

function Profile({ loginInformation, myPosts }) {
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState({ fullname: "", email: "", profileImage: "" });
    const [newPicture, setNewPicture] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const intl = useIntl();

    function fileOnChange(e) {
        const file = e.target.files[0];
        const fileGenericType = file.type.split("/")[0];
        if (fileGenericType != "image") {
            dispatch(showPopup('Error', intl.formatMessage({ id: "file_error" })));
            return;
        }
        setNewPicture(file);
    }

    function savePicture() {
        const formData = new FormData();
        formData.append("profileImage", newPicture);

        dispatch(setNewProfilePicture(formData, (imgUrl) => {
            dispatch(setNewProfileImg(imgUrl));
            setNewPicture(null);
        }));
    }

    useEffect(() => {
        setData(myPosts);
    }, [myPosts]);
    useEffect(() => {
        if (loginInformation) {
            setUserData(loginInformation);
        }
    }, [loginInformation]);
    useEffect(() => {
        dispatch(getMyPost());
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}><FormattedMessage id="profile_title" /></h1>
            <div className={classes.profileContainer}>
                <label htmlFor="file">
                    <Avatar alt="Ini Profile" src={newPicture ? URL.createObjectURL(newPicture) : userData?.profileImage != "" ? userData?.profileImage : defaultProfileImg} className={classes.avatar} />
                </label>
                {!newPicture && <input id="file" type="file" accept="image/*" onChange={fileOnChange} hidden />}
                <Typography variant="h4" className={classes.name}>{userData.fullname}</Typography>
                <Typography variant="body2" className={classes.email}>{userData.email}</Typography>
                <Button variant="contained" className={classes.button} onClick={() => navigate("/newjourney")}>
                    <FormattedMessage id="profile_add_new_btn" />
                </Button>
                {newPicture && <div className={classes.buttonContainer}>
                    <Button variant="contained" className={classes.button} color="success" onClick={() => savePicture()}>
                        <FormattedMessage id="btn_save" />
                    </Button>
                    <Button variant="contained" className={classes.button} color="error" onClick={() => setNewPicture(null)}>
                        <FormattedMessage id="btn_cancel" />
                    </Button>
                </div>}
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