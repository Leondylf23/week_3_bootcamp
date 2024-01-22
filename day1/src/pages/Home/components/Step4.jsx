
import { useState } from "react";
import { useSelector } from "react-redux";

import { plans, addOns } from "../../../constants";

import classes from "./style.module.scss";

export default function Step4Component({ changeBtn, fallback }) {
    const [serviceData, setServiceData] = useState({ title: "", description: "" });
    const [addOnsData, setAddOnsData] = useState([]);
    const [isMonthly, setIsMonthly] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    const addOnRedux = useSelector((state) => state.homeReducer.addOnsIds);
    const planId = useSelector((state) => state.homeReducer.planId)    
    const userData = useSelector((state) => state.homeReducer.userData);
    const category = useSelector((state) => state.homeReducer.category);

    useState(() => {
        const serviceSelected = plans.find(v => v.id === planId);

        if(!addOns) {
            if(typeof fallback === "function") {
                fallback(3);
                return;
            }
        } else if(!serviceSelected) {
            if(typeof fallback === "function") {
                fallback(2);
                return;
            }
        } else if(!userData || (!(userData?.name) || !(userData?.email) || !(userData?.phone))) {
            if(typeof fallback === "function") {
                fallback(1);
                return;
            }
        }

        const addOnsSelected = [];
        addOns.forEach(e => {
            if(addOnRedux.includes(e.id)) {
                addOnsSelected.push(e);
            }
        });

        let totalPrc = serviceSelected.priceNum;
        addOnsSelected.forEach(e => totalPrc += e.priceNum);

        setServiceData(serviceSelected);
        setAddOnsData(addOnsSelected);
        setIsMonthly(category === "monthly");
        setTotalPrice(totalPrc);
    }, []);

    return (
        <div className={classes.innerContainer}>
            <div className={classes.summaryContainer}>
                <div className={classes.serviceContainer}>
                    <div className={classes.service}>
                        <h3 className={classes.serviceText}>{serviceData.title}</h3>
                        <a className={classes.changeText} onClick={changeBtn}>Change</a>
                    </div>
                    <h3 className={classes.price}>{serviceData.description}</h3>
                </div>
                <div className={classes.border}></div>
                {addOnsData.length > 0 ? addOnsData.map(e =>
                    <div className={classes.addons} key={e?.id}>
                        <h3 className={classes.name}>{e?.name}</h3>
                        <h3 className={classes.price}>{e?.price}</h3>
                    </div>
                ) : <div className={classes.emptyContainer}>
                    <h3 className={classes.text}>No add ons</h3>
                </div>}
            </div>
            <div className={classes.totalContainer}>
                <h3 className={classes.name}>Total (per {isMonthly ? "month" : "year"})</h3>
                <h3 className={classes.price}>+${totalPrice}/{isMonthly ? "mo" : "yr"}</h3>
            </div>
        </div>
    );
}