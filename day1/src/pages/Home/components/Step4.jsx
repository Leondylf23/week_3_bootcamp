
import { useState } from "react";
import classes from "./style.module.scss";
import { addOns, plans } from "../../../constants";

export default function Step4Component({ changeBtn }) {
    const [serviceData, setServiceData] = useState({ title: "", description: "" });
    const [addOnsData, setAddOnsData] = useState([]);
    const [isMonthly, setIsMonthly] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);

    useState(() => {
        const testAddon = [0,2];
        const serviceSelected = plans.find(v => v.id === 1);
        const addOnsSelected = [];
        addOns.forEach(e => {
            if(testAddon.includes(e.id)) {
                addOnsSelected.push(e);
            }
        });

        let totalPrc = serviceSelected.priceNum;
        addOnsSelected.forEach(e => totalPrc += e.priceNum);

        setServiceData(serviceSelected);
        setAddOnsData(addOnsSelected);
        setIsMonthly(true);
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
                {addOnsData.map(e =>
                    <div className={classes.addons}>
                        <h3 className={classes.name}>{e?.name}</h3>
                        <h3 className={classes.price}>{e?.price}</h3>
                    </div>
                )}
            </div>
            <div className={classes.totalContainer}>
                <h3 className={classes.name}>Total (per {isMonthly ? "month" : "year"})</h3>
                <h3 className={classes.price}>+${totalPrice}/{isMonthly ? "mo" : "yr"}</h3>
            </div>
        </div>
    );
}