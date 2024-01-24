import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormattedMessage, useIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PropTypes from "prop-types";


import { setNavTransparent } from '@containers/App/actions';
import CardList from '@components/CardList';
import { selectLogin } from '@containers/Client/selectors';
import { selectAllPost } from './selectors';
import { getAllPost } from './actions';

import classes from "./style.module.scss";

const Home = ({ allpost }) => {
  const dispatch = useDispatch();
  const imgElement = useRef();
  const intl = useIntl();

  const [data, setData] = useState([]);
  const [viewData, setViewData] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isUserLogined, setIsUserLogined] = useState(false);

  const isLogin = useSelector(selectLogin);

  function searchData() {
    if(searchField != "") {
      setViewData(data.filter(v => v.title.toLowerCase().indexOf(searchField.toLowerCase()) !== -1));
    } else {
      setViewData(data);
    }
  }

  function scrollEvent(e) {
    const currentScroll = e.target.scrollingElement.scrollTop;
    const offsetImgElement = imgElement.current.offsetHeight;
    if ((currentScroll < (offsetImgElement - 60)) && !isUserLogined) {
      dispatch(setNavTransparent(true));
    } else {
      dispatch(setNavTransparent(false));
    }
  }

  useEffect(() => {
    // dispatch(ping());
    // dispatch(setNavTransparent(true));
      dispatch(getAllPost());
  }, [dispatch]);
  useEffect(() => {
    addEventListener("scroll", scrollEvent);

    return () => removeEventListener("scroll", scrollEvent);
  }, []);

  // cleanup
  useEffect(() => {
    const resData = allpost
    setData(allpost);
    setViewData(allpost);
    setIsUserLogined(isLogin);

    if(isLogin) {
      dispatch(setNavTransparent(false));
    } else {
      dispatch(setNavTransparent(true));
    }

    return () => dispatch(setNavTransparent(false));
  }, [isLogin, allpost]);

  return (
    <div className={`${classes.container} ${isUserLogined ? "" : classes.translate}`}>
      <div className={`${classes.headerImg} ${isUserLogined ? classes.headerImgDisabled : ""}`} ref={imgElement}>
        <div className={classes.textContainer}>
          <h1 className={classes.textHeader1}><FormattedMessage id='home_heading1' /></h1>
          <h3 className={classes.textHeader3}><FormattedMessage id='home_heading2' /></h3>
        </div>
      </div>
      <div className={classes.content}>
        <h1 className={classes.pageTitle}><FormattedMessage id='home_title' /></h1>
        <div className={classes.searchContainer}>
          <TextField
            id="search"
            placeholder={intl.formatMessage({id: "home_search_placeholder"})}
            value={searchField}
            onChange={(e) => setSearchField(e.target.value)}
            variant='outlined'
            InputProps={{
              style: {
                borderRadius: "10px 0px 0px 10px",
              }
            }}
            className={classes.searchField}
          />
          <Button variant="contained" className={classes.searchBtn} sx={{ borderRadius: "0px 10px 10px 0px" }}>
            <FormattedMessage id='home_search_button' />
          </Button>
        </div>
        <CardList data={viewData} />
      </div>
    </div>
  );
};

Home.propTypes = {
  allpost: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  allpost: selectAllPost
});

export default connect(mapStateToProps)(Home);
