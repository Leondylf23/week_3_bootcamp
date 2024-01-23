
import { useEffect, useState } from "react";
import clasess from "./style.module.scss";

export default function StepsIndicator({step, onClickStep}) {
    const [pageIndicator, setPageIndicator] = useState(0);

    useEffect(() => {
        setPageIndicator(step);
    }, [step]);

    return(
        <div className={clasess.sidePane}>
            <button className={clasess.step} onClick={() => onClickStep(1)}>
                <div className={clasess.stepBtn + " " + (pageIndicator === 1 ? clasess.stepBtnActive : "")}><a className={clasess.text}>1</a></div>
                <div className={clasess.textContainer}>
                    <h3 className={clasess.title}>STEP 1</h3>
                    <h3 className={clasess.description}>YOUR INFO</h3>
                </div>
            </button>
            <button className={clasess.step} onClick={() => onClickStep(2)}>
                <div className={clasess.stepBtn + " " + (pageIndicator === 2 ? clasess.stepBtnActive : "")}><a className={clasess.text}>2</a></div>
                <div className={clasess.textContainer}>
                    <h3 className={clasess.title}>STEP 2</h3>
                    <h3 className={clasess.description}>SELECT PLAN</h3>
                </div>
            </button>
            <button className={clasess.step} onClick={() => onClickStep(3)}>
                <div className={clasess.stepBtn + " " + (pageIndicator === 3 ? clasess.stepBtnActive : "")}><a className={clasess.text}>3</a></div>
                <div className={clasess.textContainer}>
                    <h3 className={clasess.title}>STEP 3</h3>
                    <h3 className={clasess.description}>ADD-ONS</h3>
                </div>
            </button>
            <button className={clasess.step} onClick={() => onClickStep(4)}>
                <div className={clasess.stepBtn + " " + (pageIndicator > 3 ? clasess.stepBtnActive : "")}><a className={clasess.text}>4</a></div>
                <div className={clasess.textContainer}>
                    <h3 className={clasess.title}>STEP 4</h3>
                    <h3 className={clasess.description}>SUMMARY</h3>
                </div>
            </button>
        </div>
    );
}