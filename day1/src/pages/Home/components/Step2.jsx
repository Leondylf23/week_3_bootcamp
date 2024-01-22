
import { useEffect, useState } from "react";
import { Stack, Typography, Switch } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";

import { setAddOnsIds, setCategoryRedux, setPlanId } from "../reduceAction";
import { plans } from "../../../constants";

import classes from "./style.module.scss";

export default function Step2Component({ fallback }) {
    const [selection, setSelection] = useState([]);
    const [selected, setSelected] = useState(-1);
    const [category, setCategory] = useState("monthly");

    const dispatch = useDispatch();
    const planId = useSelector((state) => state.homeReducer.planId);
    const userData = useSelector((state) => state.homeReducer.userData);

    function changeSelection(id) {
        setSelected(id);
    }
    function switchCategory(isYearly) {
        if (category === "monthly") {
            setCategory("yearly");
        } else {
            setCategory("monthly");
        }
    }

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
                duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));

    useEffect(() => {
        if(!userData || (!(userData?.name) || !(userData?.email) || !(userData?.phone))) {
            if(typeof fallback === "function") {
                fallback(1);
            }
        }
        if (planId != null) {
            const data = plans.find(v => v.id === planId);
            
            if (!data) return;
            
            setCategory(data?.category);
            setSelected(planId);
        }
    }, []);
    useEffect(() => {
        setSelection(plans.filter(v => v.category === category));
    }, [category]);
    useEffect(() => {
        dispatch(setPlanId(selected));
        dispatch(setCategoryRedux(category));
    }, [selected]);

    return (
        <div className={classes.innerContainer}>
            <div className={classes.selectorContainer}>
                {selection?.map(e =>
                    <div className={classes.selector + " " + (e?.id === selected ? classes.selectorActive : "")} key={e?.id} onClick={() => changeSelection(e?.id)}>
                        <img src={e?.icon} className={classes.icon} />
                        <div className={classes.texts}>
                            <h2 className={classes.title}>{e?.title}</h2>
                            <h3 className={classes.detail}>{e?.description}</h3>
                            {e?.extra != "" && <h4 className={classes.extra}>{e?.extra}</h4>}
                        </div>
                    </div>
                )}
            </div>
            <div className={classes.switchContainer}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography className={classes.text + " " + (category === "monthly" ? classes.textActive : "")}>Monthly</Typography>
                    <AntSwitch checked={category === "yearly"} onChange={(e) => switchCategory(e.target.checked)} inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography className={classes.text + " " + (category === "yearly" ? classes.textActive : "")}>Yearly</Typography>
                </Stack>
            </div>
        </div>
    );
}