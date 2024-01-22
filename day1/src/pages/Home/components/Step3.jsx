import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { addOns } from "../../../constants";

import classes from "./style.module.scss";
import { setAddOnsIds } from "../reduceAction";

export default function Step3Component({ fallback }) {
    const [selection, setSelection] = useState([]);
    const [selected, setSelected] = useState([]);

    const dispatch = useDispatch();
    const addOnsIdRedux = useSelector((state) => state.homeReducer.addOnsIds);
    const category = useSelector((state) => state.homeReducer.category);
    const planId = useSelector((state) => state.homeReducer.planId);

    function addRemoveSelection(id) {
        if (selected?.findIndex(v => v === id) != -1) {
            setSelected(prevVal => prevVal.filter(v => v != id));
        } else {
            setSelected(prevVal => [...prevVal, id]);
        }
    }

    useEffect(() => {
        if (category && planId != null && planId != -1) {
            setSelection(addOns.filter(v => v.category === category));
        } else {
            if (typeof fallback === "function") {
                fallback(2);
            }
        }
    }, [category]);
    useEffect(() => {
        if (addOnsIdRedux && Array.isArray(addOnsIdRedux)) {
            for (let index = 0; index < addOnsIdRedux.length; index++) {
                const element = addOnsIdRedux[index];
                const dataAddOns = addOns.find(v => v.id === element);
                
                if (dataAddOns?.category != category) {
                    dispatch(setAddOnsIds([]));
                    setSelected([]);
                    return;
                }
            }
            setSelected(addOnsIdRedux);
        }
    }, []);
    useEffect(() => {
        dispatch(setAddOnsIds(selected));
    }, [selected]);

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