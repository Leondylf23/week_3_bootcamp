import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

import { convertDate } from '@utils/allUtils';

import classes from "./style.module.scss";

function CardTravel({ data }) {
    const navigate = useNavigate();

    function gotToDetail() {
        navigate(`/${data?.id}`);
    }

    return (
        <Card sx={{ width: "100%" }} className={classes.card} onClick={gotToDetail}>
            <IconButton aria-label="favorite" onClick={() => {}} className={classes.bookmarkBtn}>
              <BookmarkBorderIcon />
            </IconButton>
            <CardMedia title={data?.title} image={data?.imageUrl} className={classes.cardImg} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4" className={classes.title}>{data?.title}</Typography>
                <Typography variant="body2" className={classes.dateName}>{`${convertDate(data?.timestamp)}, ${data?.user?.fullname}`}</Typography>
                <Typography variant="body2" className={classes.description}>{data?.shortDesc}</Typography>
            </CardContent>
        </Card>
    );
}

CardTravel.ropTypes = {
    data: PropTypes.object
}

export default CardTravel;