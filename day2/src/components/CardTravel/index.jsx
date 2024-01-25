import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useIntl } from "react-intl";
import DeleteIcon from '@mui/icons-material/Delete';

import { convertDate } from '@utils/allUtils';

import classes from "./style.module.scss";
import { addToBookmark, removeFromBookmark, showPopup } from '@containers/App/actions';
import { createStructuredSelector } from 'reselect';
import { selectLogin } from '@containers/Client/selectors';
import { useEffect, useState } from 'react';

function CardTravel({ data, isRemoveBookmark = false, onDelete, isLogin }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const intl = useIntl();

    const [isLogined, setIsLogined] = useState(false);

    useEffect(() => {
        setIsLogined(isLogin);
    }, [isLogin])

    function gotToDetail() {
        navigate(`/${data?.id}`);
    }

    function addToBookmarkBtn() {
        dispatch(addToBookmark(data?.id, () => {
            dispatch(showPopup("Bookmark", intl.formatMessage({ id: "bookmark_add_success" })));
        }));
    }

    function removeFromBookmarkBtn() {
        dispatch(removeFromBookmark(data?.id, () => {
            dispatch(showPopup("Bookmark", intl.formatMessage({ id: "bookmark_remove_success" })));
            if(typeof onDelete === "function") {
                onDelete(data?.id);
            }
        }));
    }

    return (
        <Card sx={{ width: "100%" }} className={classes.card}>
            {isLogined ? (isRemoveBookmark ? 
                <IconButton aria-label="favorite" onClick={removeFromBookmarkBtn} className={classes.rmBookmarkBtn}>
                    <DeleteIcon />
                </IconButton> :
                <IconButton aria-label="favorite" onClick={addToBookmarkBtn} className={classes.bookmarkBtn}>
                    <BookmarkBorderIcon />
                </IconButton>)
            : <></>}
            <CardMedia title={data?.title} image={data?.imageUrl} sx={{height: "250px"}} className={classes.cardImg} onClick={gotToDetail} />
            <CardContent className={classes.cardContent} onClick={gotToDetail}>
                <Typography variant="h4" className={classes.title}>{data?.title}</Typography>
                <Typography variant="body2" className={classes.dateName}>{`${convertDate(data?.timestamp)}, ${data?.user?.fullname}`}</Typography>
                <Typography variant="body2" className={classes.description}>{data?.shortDesc}</Typography>
            </CardContent>
        </Card>
    );
}

CardTravel.PropTypes = {
    data: PropTypes.object,
    isRemoveBookmark: PropTypes.bool,
    onDelete: PropTypes.func,
    isLogin: PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
    isLogin: selectLogin,
});

export default connect(mapStateToProps)(CardTravel);