
import { iconThankYou } from "../../../assets/imgs";
import classes from "./style.module.scss";

export default function Step5Component() {
    return (
        <div className={classes.innerContainer}>
            <div className={classes.thankYouContainer}>
                <img src={iconThankYou} alt="" className={classes.icon} />
                <h1 className={classes.title}>Thank you!</h1>
                <div className={classes.detailContainer}>
                    <h2 className={classes.textParagraph}>Thanks for confirming your subscription!</h2>
                    <p className={classes.textParagraph}>We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
                </div>
            </div>
        </div>
    );
}