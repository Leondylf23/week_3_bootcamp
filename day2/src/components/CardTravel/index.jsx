import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";
import DeleteIcon from '@mui/icons-material/Delete';

import { convertDate } from '@utils/allUtils';

import classes from "./style.module.scss";
import { addToBookmark, removeFromBookmark, showPopup } from '@containers/App/actions';

function CardTravel({ data, isRemoveBookmark = false, onDelete }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const intl = useIntl();

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
            {isRemoveBookmark ? 
                <IconButton aria-label="favorite" onClick={removeFromBookmarkBtn} className={classes.rmBookmarkBtn}>
                    <DeleteIcon />
                </IconButton> :
                <IconButton aria-label="favorite" onClick={addToBookmarkBtn} className={classes.bookmarkBtn}>
                    <BookmarkBorderIcon />
                </IconButton>
            }
            <CardMedia title={data?.title} image={data?.imageUrl} className={classes.cardImg} onClick={gotToDetail} />
            <CardContent className={classes.cardContent} onClick={gotToDetail}>
                <Typography variant="h4" className={classes.title}>{data?.title}</Typography>
                <Typography variant="body2" className={classes.dateName}>{`${convertDate(data?.timestamp)}, ${data?.user?.fullname}`}</Typography>
                <Typography variant="body2" className={classes.description}>{data?.shortDesc}</Typography>
            </CardContent>
        </Card>
    );
}

CardTravel.ropTypes = {
    data: PropTypes.object,
    isRemoveBookmark: PropTypes.bool
}

export default CardTravel;