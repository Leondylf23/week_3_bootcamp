
import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { addOns } from "../../../constants";

import classes from "./style.module.scss";

export default function Step3Component() {
    const [selection, setSelection] = useState([]);
    const [selected, setSelected] = useState([]);
    const [category, setCategory] = useState("monthly");

    const dispatch = useDispatch();
    const addOnsIdRedux = useSelector((state) => state.homeReducer.addOnsIds);

    function addRemoveSelection(id) {
        if(selected?.findIndex(v => v === id) != -1) {
            setSelected(prevVal => prevVal.filter(v => v != id));
        } else {
            setSelected(prevVal => [...prevVal, id]);
        }
    }
    function switchCategory(isYearly) {
        if (category === "monthly") {
            setCategory("yearly");
        } else {
            setCategory("monthly");
        }
    }

    useEffect(() => {
        setSelection(addOns.filter(v => v.category === category));
    }, [category]);

    useEffect(() => {
        if(addOnsIdRedux) {
            setSelected(addOnsIdRedux);
        }
    }, []);

    return (
        <div className={classes.innerContainer}>
            <div className={classes.checkboxConteiner}>
                {selection?.map(e =>
                    <div className={classes.selector + " " + ((selected?.findIndex(v => v === e?.id) != -1) ? classes.selectorActive : "")} key={e?.id} onClick={() => addRemoveSelection(e?.id)}>
                        <div>
                        <Checkbox size="large" checked={(selected?.findIndex(v => v === e?.id) != -1)} onChange={() => addRemoveSelection(e?.id)} />
                        </div>
                        <div className={classes.texts}>
                            <h2 className={classes.title}>{e?.name}</h2>
                            <h3 className={classes.detail}>{e?.description}</h3>
                        </div>
                        <h3 className={classes.price}>{e?.price}</h3>
                    </div>
                )}
            </div>
        </div>
    );
}