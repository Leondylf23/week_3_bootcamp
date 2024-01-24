import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";

import CardList from "@components/CardList";

import classes from "./style.module.scss";
import { getBookmark } from "./actions";
import { createStructuredSelector } from "reselect";
import { selectBookmarks } from "./selectors";

function Bookmarks({ bookmarks }) {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(bookmarks) {
            setData(bookmarks.map(e => ({
                id: e?.idPost,
                title: e?.postBookmarks?.title,
                imageUrl: e?.postBookmarks?.imageUrl,
                shortDesc: e?.postBookmarks?.shortDesc,
                timestamp: e?.postBookmarks?.timestamp,
                user: {
                    fullname: e?.userBookmarks?.fullname
                }
            })));
        }
    }, [bookmarks]);
    useEffect(() => {
        dispatch(getBookmark());
    }, [dispatch]);

    return (
        <div className={classes.container}>
            <h1 className={classes.pageTitle}><FormattedMessage id="bookmark_title"/></h1>
            <CardList data={data} isRemoveBookmarkBtn={true} />
        </div>
    );
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
    bookmarks: selectBookmarks
});

export default connect(mapStateToProps)(Bookmarks);