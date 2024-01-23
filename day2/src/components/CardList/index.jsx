import PropType from "prop-types";
import CardTravel from "@components/CardTravel";
import FillMessage from "@components/FillMessage";

import classes from "./style.module.scss";

function CardList({ data }) {
    return (
        data.length > 0 ? <div className={classes.cardsContainer}>
            {data?.map(e =>
                <CardTravel data={e} />
            )}
        </div> : <FillMessage message={"Kosong"}></FillMessage>
    );
}

CardList.propType = {
    data: PropType.array.isRequired
}

export default CardList;