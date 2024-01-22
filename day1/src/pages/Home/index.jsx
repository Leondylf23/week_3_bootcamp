import { useState } from "react";
import { useDispatch } from "react-redux"

import Step1Component from "./components/Step1";
import Step2Component from "./components/Step2";
import Step3Component from "./components/Step3";
import Step4Component from "./components/Step4";
import Step5Component from "./components/Step5";
import StepsIndicator from "./components/StepsIndicators";

import classes from "./style.module.scss";
import { setAddOnsIds, setPlanId, setUserInfo } from "./reduceAction";

export default function Home() {
    const [page, setPage] = useState(null);
    const [pageIndicator, setPageIndicator] = useState(0);
    const [pageTexts, setPageTexts] = useState({ title: "", msg: "" });

    const dispatch = useDispatch();

    function setContentPage(i) {
        setPageIndicator(i < 5 ? i : 4);

        switch (i) {
            case 1:
                setPageTexts({ title: "Personal info", msg: "Please provide your name, email address, and phone number." });
                setPage(<Step1Component />);
                break;
            case 2:
                setPageTexts({ title: "Select your plan", msg: "You have the option of monthly or yearly billing." });
                setPage(<Step2Component />);
                break;
            case 3:
                setPageTexts({ title: "Pick add-ons", msg: "Add-ons help enhance your gaming experience." });
                setPage(<Step3Component />);
                break;
            case 4:
                setPageTexts({ title: "Finishing up", msg: "Double-check everything looks OK before confirming." });
                setPage(<Step4Component changeBtn={() => setPage(<Step2Component />)} />);
                break;
            default:
                setPageTexts({ title: "", msg: "" });
                setPage(<Step5Component />);
                break;
        }
    }

    useState(() => {
        setContentPage(1);
    }, []);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.mobileHeader}>
                <div className={classes.stepsIndicatorMobile}>
                    <button className={classes.steps + " " + (pageIndicator === 1 ? classes.stepsActive : "")} onClick={() => setContentPage(1)}><h3 className={classes.text}>1</h3></button>
                    <button className={classes.steps + " " + (pageIndicator === 2 ? classes.stepsActive : "")} onClick={() => setContentPage(2)}><h3 className={classes.text}>2</h3></button>
                    <button className={classes.steps + " " + (pageIndicator === 3 ? classes.stepsActive : "")} onClick={() => setContentPage(3)}><h3 className={classes.text}>3</h3></button>
                    <button className={classes.steps + " " + (pageIndicator === 4 ? classes.stepsActive : "")} onClick={() => setContentPage(4)}><h3 className={classes.text}>4</h3></button>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <StepsIndicator step={pageIndicator} onClickStep={setContentPage} />
                </div>
                <div className={classes.rightSide}>
                    {pageTexts?.title != "" && <h1 className={classes.title}>{pageTexts.title}</h1>}
                    {pageTexts?.msg != "" && <h3 className={classes.message}>{pageTexts.msg}</h3>}
                    {page}
                    <div className={classes.footer}>
                        {pageIndicator > 1 && <button className={classes.buttonNoDecoration}>Go Back</button>}
                        <div className={classes.fillContainer}>
                            <button className={classes.buttonDefault}>Next Step</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.footerMobile}>
                {pageIndicator > 1 && <button className={classes.buttonNoDecoration}>Go Back</button>}
                <div className={classes.fillContainer}>
                    <button className={classes.buttonDefault}>Next Step</button>
                </div>
            </div>
        </div>
    );
}