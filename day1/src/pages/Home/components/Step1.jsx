
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./style.module.scss";
import { setUserInfo } from "../reduceAction";
import { emailRegex, phoneRegex } from "../../../constants";

export default function Step1Component() {
    const [personalInfo, setPersonalInfo] = useState({name: "", email: "", phone: ""});

    const dispatch = useDispatch();
    const personalInfoRedux = useSelector((state) => state.homeReducer.userData);

    useEffect(() => {
        if(personalInfo?.name?.length > 4) {
            dispatch(setUserInfo({...personalInfoRedux, name: personalInfo?.name}));
        }
        if(emailRegex.test(personalInfo?.email)) {
            dispatch(setUserInfo({...personalInfoRedux, email: personalInfo?.email}));
        }
        if(phoneRegex.test(personalInfo?.phone)) {
            dispatch(setUserInfo({...personalInfoRedux, phone: personalInfo?.phone}));
        }
    }, [personalInfo]);

    useEffect(() => {
        if(personalInfoRedux) {
            setPersonalInfo(personalInfoRedux);
        }
    }, []);

    return (
        <div className={classes.innerContainer}>
            <div className={classes.inputForms}>
                <label htmlFor="input-name" className={classes.labelInput}>Name</label>
                <input type="text" className={classes.inputField} placeholder="e.g. Stephen King" value={personalInfo.name} onChange={(e) => setPersonalInfo(prevVal => ({...prevVal, name: e.target.value}))} />
                <label htmlFor="input-email" className={classes.labelInput}>Email Address</label>
                <input type="text" className={classes.inputField} placeholder="e.g. stephenking@lorem.com" value={personalInfo.email} onChange={(e) => setPersonalInfo(prevVal => ({...prevVal, email: e.target.value}))} />
                <label htmlFor="input-phone" className={classes.labelInput}>Phone Number</label>
                <input type="text" className={classes.inputField} placeholder="e.g. +1 234 567 890" value={personalInfo.phone} onChange={(e) => setPersonalInfo(prevVal => ({...prevVal, phone: e.target.value}))} />
            </div>
        </div>
    );
}