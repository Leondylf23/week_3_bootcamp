
import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import CardList from "@components/CardList";

import classes from "./style.module.scss";

function Bookmarks() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            {
                id: 0,
                title: "asdwasd 1",
                date: "2020-07-29",
                description: "Liburan di tahun baru 2020 keberangkatan saya menuju Pulau Dewata Bali.  Sampai lah saya malam itu di Bali Airport menujukan waktu jam 02.00, dan melanjutkan pejalanan yang menyenangkan..",
                img: "https://s3-alpha-sig.figma.com/img/9ea2/b7f6/0b3985e85ba9dadcd815f7a9bf442435?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D8MNgdQphS6Zvxh7WFqhWgJqtNAXDeWr1qhzxTRkkcx1k0IJ7vcyWF~ZkRDfz9EjmQJOArLOm6Rno2pVcEYOg8qP1zTSZIibaCP0oU63nUjeZaDnUAmUBIBjdaVHLtZTdN2pxEVLxa-WOtUFdv4Zs85Td2XqRh3RuhZp3AoYtKB9IGdoM0GeD6sE3~12K4~Xo8iydMMIkI4cwUFkWTMldW7LpvJIccfvKS2FiXs5KbzpFL0ZPKCYmJAwPe8PjwpkDgOn4f89Mr10fhi1qyZ-FlQJKTilwxXRJvQZPhajVVaqW~T9B8V7RH-x~IJjhSMW6l70sF0Yw4mqX-7JRot81w__",
                author: "Cipto"
            },
        ]);
    }, []);

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}><FormattedMessage id="bookmark_title"/></h1>
            <CardList data={data} />
        </div>
    );
}

export default Bookmarks;