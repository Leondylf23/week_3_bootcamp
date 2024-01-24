import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector, connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Button from '@mui/material/Button'
import ModalContainer from '@components/ModalContainer';
import Register from './components/Register';
import Login from './components/Login';
import DropDownMenu from './components/DropdownMenu';

import { setLocale, setTheme } from '@containers/App/actions';
import { defaultProfileImg, logo, logoWhite } from '@static/images';
import { selectIsNavTransparent } from '@containers/App/selectors';
import { selectLogin, selectLoginInformation } from '@containers/Client/selectors';

import classes from './style.module.scss';
import { createStructuredSelector } from 'reselect';

const Navbar = ({ title, locale, theme, isTransparent, isLogin, loginInformation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuPosition, setMenuPosition] = useState(null);
  const [isBgTransparent, setIsBgTransparent] = useState(false);
  const [isUserLogined, setIsUserLogined] = useState(false);
  const [modalPage, setModalPage] = useState (null);
  const [userProfileImg, setUserProfileImg] = useState ("");
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpenMenu = Boolean(anchorEl);
  const open = Boolean(menuPosition);

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
      setModalPage(<Register switchToLogin={() => openModal("login")} onClose={() => setModalPage(null)} />);
    } else {
      setModalPage(<Login switchToRegister={() => openModal("register")} onClose={() => setModalPage(null)} />);
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

  const openCloseProfileMenu = (e) => {
    if(isOpenMenu) {
      setAnchorEl(null);
    } else {
      setAnchorEl(e.currentTarget);
    }
  }

  useEffect(() => {
    setIsBgTransparent(isTransparent);
  }, [isTransparent]);
  useEffect(() => {
    setIsUserLogined(isLogin);
    setUserProfileImg(loginInformation?.profileImage != "" ? loginInformation?.profileImage : defaultProfileImg);
  }, [isLogin, loginInformation]);

  return (
    <div className={`${classes.headerWrapper} ${isBgTransparent ? classes.transparent : ""}`} data-testid="navbar">
      <ModalContainer isOpen={modalPage} handleClose={() => setModalPage(null)} size='small'>
          {modalPage}
      </ModalContainer>
      <div className={classes.contentWrapper}>
        <div className={classes.logoImage} onClick={goHome}>
          <img src={isTransparent ? logoWhite : logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.toolbar}>
          {isUserLogined ? 
          <div className={classes.profile}>
            <Avatar className={classes.avatar} src={userProfileImg} onClick={openCloseProfileMenu}/>
            <DropDownMenu isOpen={isOpenMenu} anchorEl={anchorEl} onClose={openCloseProfileMenu} labeledMenu={""} />
          </div> : <div className={classes.userButtons}>
              <Button variant="outlined" className={`${classes.login} ${isBgTransparent ? "" : classes.loginDark}`} onClick={() => openModal("login")}>
                <FormattedMessage id="nav_login"/>
              </Button>
              <Button variant="contained" className={classes.register} onClick={() => openModal("register")}>
                <FormattedMessage id="nav_register"/>
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

Navbar.JourneypropTypes = {
  title: PropTypes.string,
  locale: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loginInformation: selectLoginInformation,
  isLogin: selectLogin,
  isTransparent: selectIsNavTransparent
});

export default connect(mapStateToProps)(Navbar);
