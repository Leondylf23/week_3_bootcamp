import PropType from "prop-types";
import CardTravel from "@components/CardTravel";
import FillMessage from "@components/FillMessage";

import classes from "./style.module.scss";
import { useEffect, useState } from "react";

function CardList({ data, isRemoveBookmarkBtn }) {
    const [internalData, setInternalData] = useState([]);

    function onDelete(id) {
        if(internalData && Array.isArray(internalData)) {
            setInternalData(prevVal => prevVal.filter(v => v?.id != id));
        }
    }

    useEffect(() => {
        setInternalData(data);
    }, [data]);

    return (
        data.length > 0 ? <div className={classes.cardsContainer}>
            {internalData?.map(e =>
                <CardTravel data={e} isRemoveBookmark={isRemoveBookmarkBtn} onDelete={onDelete} />
            )}
        </div> : <FillMessage message={"Kosong"}></FillMessage>
    );
}

CardList.propType = {
    data: PropType.array.isRequired,
    isRemoveBookmarkBtn: PropType.bool
}

export default CardList;