import { useParams, useNavigate } from 'react-router-dom';
import { homeBgHeader } from '@static/images';
import { useEffect, useState } from 'react';
import { convertDate } from '@utils/allUtils';
import { createStructuredSelector } from 'reselect';
import { selectPostDetail } from './selectors';
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import clasess from "./style.module.scss";
import { getPostDetail } from './actions';

const initialStateData = {
    title: "",
    date: "",
    author: "",
    imageUrl: "",
    content: "",
}

function DetailPost({ postDetail }) {
    const {postid} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState(initialStateData);

    useEffect(() => {
        dispatch(getPostDetail(postid, () => {
            navigate("/notfound");
        }));
    }, []);
    useEffect(() => {
        if(postDetail) {
            setData(postDetail);
        }
    }, [postDetail]);
    return(
        <div className={clasess.container}>
            <div className={clasess.headerContainer}>
                <h1 className={clasess.title}>{data?.title}</h1>
                <div className={clasess.nameContainer}>
                    <h3 className={clasess.name}>{data?.user?.fullname}</h3>
                </div>
            </div>
            <div className={clasess.headerDateContainer}>
                <h3 className={clasess.date}>{convertDate(data?.timestamp)}</h3>
            </div>
            <div className={clasess.imageContainer}>
                <img src={data?.imageUrl != "" ? data?.imageUrl : homeBgHeader} className={clasess.image}/>
            </div>
            <div className={clasess.contentContainer} dangerouslySetInnerHTML={{__html: data?.description}} />
        </div>
    );
}

DetailPost.propTypes = {
    postDetail: PropTypes.object
}

const mapStateToProps = createStructuredSelector({
    postDetail: selectPostDetail
});

export default connect(mapStateToProps)(DetailPost);