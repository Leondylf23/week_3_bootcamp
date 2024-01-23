import { useParams, useNavigate } from 'react-router-dom';

import clasess from "./style.module.scss";
import { homeBgHeader } from '@static/images';
import { useState } from 'react';
import { convertDate } from '@utils/allUtils';

const initialStateData = {
    title: "",
    date: "",
    author: "",
    imageUrl: "",
    content: "",
}

function DetailPost() {
    const {postid} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(initialStateData);

    return(
        <div className={clasess.container}>
            <div className={clasess.headerContainer}>
                <h1 className={clasess.title}>{data?.title}</h1>
                <div className={clasess.nameContainer}>
                    <h3 className={clasess.name}>{data?.author}</h3>
                </div>
            </div>
            <div className={clasess.headerDateContainer}>
                <h3 className={clasess.date}>{convertDate(data?.date)}</h3>
            </div>
            <div className={clasess.imageContainer}>
                <img src={data?.imageUrl != "" ? data?.imageUrl : homeBgHeader} className={clasess.image}/>
            </div>
            <div className={clasess.contentContainer} dangerouslySetInnerHTML={{__html: data?.content}} />
        </div>
    );
}

export default DetailPost;