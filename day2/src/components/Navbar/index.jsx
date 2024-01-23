import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

import { setLocale, setTheme } from '@containers/App/actions';

import classes from './style.module.scss';
import { defaultProfileImg, logo, logoWhite } from '@static/images';
import { selectIsNavTransparent } from '@containers/App/selectors';
import { selectLogin } from '@containers/Client/selectors';
import Button from '@mui/material/Button'
import ModalContainer from '@components/ModalContainer';
import Register from './components/Register';
import Login from './components/Login';

const Navbar = ({ title, locale, theme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [isBgTransparent, setIsBgTransparent] = useState(false);
  const [isUserLogined, setIsUserLogined] = useState(false);
  const [modalPage, setModalPage] = useState (null);

  const open = Boolean(menuPosition);

  const isTransparent = useSelector(selectIsNavTransparent);
  const isLogin = useSelector(selectLogin);

  const handleClick = (event) => {
    setMenuPosition(event.currentTarget);
  };

  const handleClose = () => {
    setMenuPosition(null);
  };

  // const handleTheme = () => {
  //   dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  // };

  const openModal = (modalType) => {
    if(modalType === "register") {
      setModalPage(<Register/>);
    } else {
      setModalPage(<Login/>);
    }
  }

  const onSelectLang = (lang) => {
    if (lang !== locale) {
      dispatch(setLocale(lang));
    }
    handleClose();
  };

  const goHome = () => {
    navigate('/');
  };

  useEffect(() => {
    setIsBgTransparent(isTransparent);
  }, [isTransparent]);
  useEffect(() => {
    setIsUserLogined(isLogin);
  }, [isLogin]);

  return (
    <div className={`${classes.headerWrapper} ${isBgTransparent ? classes.transparent : ""}`} data-testid="navbar">
      <ModalContainer isOpen={modalPage} handleClose={() => setModalPage(null)} >
          {modalPage}
      </ModalContainer>
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={isTransparent ? logoWhite : logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.toolbar}>
          {isUserLogined ? 
          <div className={classes.profile}>
            <Avatar className={classes.avatar} src={defaultProfileImg} />
          </div> : <div className={classes.userButtons}>
              <Button variant="outlined" className={`${classes.login} ${isBgTransparent ? "" : classes.loginDark}`} onClick={() => openModal("login")}>
                  Login
              </Button>
              <Button variant="contained" className={classes.register} onClick={() => openModal("register")}>
                  Register
              </Button>
          </div>
          }
          {/* <div className={classes.theme} onClick={handleTheme} data-testid="toggleTheme">
            {theme === 'light' ? <NightsStayIcon /> : <LightModeIcon />}
          </div> */}
          <div className={classes.toggle} onClick={handleClick}>
            <Avatar className={classes.avatar} src={locale === 'id' ? '/id.png' : '/en.png'} />
            <div className={classes.lang}>{locale}</div>
            <ExpandMoreIcon />
          </div>
        </div>
        <Menu open={open} anchorEl={menuPosition} onClose={handleClose}>
          <MenuItem onClick={() => onSelectLang('id')} selected={locale === 'id'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/id.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_id" />
              </div>
            </div>
          </MenuItem>
          <MenuItem onClick={() => onSelectLang('en')} selected={locale === 'en'}>
            <div className={classes.menu}>
              <Avatar className={classes.menuAvatar} src="/en.png" />
              <div className={classes.menuLang}>
                <FormattedMessage id="app_lang_en" />
              </div>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

export default Navbar;
