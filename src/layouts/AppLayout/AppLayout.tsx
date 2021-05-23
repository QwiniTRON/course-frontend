import React, { useCallback, useEffect, useRef } from 'react';
import { AppConsts, appImg, appRoutes, ByRole, Logout, RootState, Secure, ThemesEnum } from '../../App';
import {
  AppLayoutDocument,
  Burger,
  EmptyBlock,
  LayoutHeader,
  Logo,
  LogoMenu,
  ProfileManager,
  ProfileManagerIcon,
  ProfileManagerItem,
  ProfileManagerMenu,
  ProfileManagerPunkt,
  useStyles,
  Clear,
  LayoutContent,
  LayoutMenu,
  LayoutBody,
  NavItem,
  ProfileManagerButton,
  ProfileManagerName
} from './styled';
import Button from '@material-ui/core/Button';

import { Box, IconButton, Switch } from '@material-ui/core';
import { useThemeConfig } from '../../App/style/theme/UseThemeConfig';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import ViewListIcon from '@material-ui/icons/ViewList';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch, useSelector } from 'react-redux';
import { UserRoles } from '../../models';

type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const dispatch = useDispatch();

  const [profileOpen, setProfileOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menusStatuses = useRef({profile: false, menu: false});
  menusStatuses.current.menu = menuOpen;
  menusStatuses.current.profile = profileOpen;

  const themeConfiguration = useThemeConfig();
  const styles = useStyles();

  const userData = useSelector((state: RootState) => state.user.userData);
  const userName = userData?.nick ?? "Без имени";
  const userAvatar = userData?.photo ? appImg(userData?.photo) : AppConsts.DefaultPhotoPath;

  const exitHandel = useCallback(() => {
    dispatch(Logout());
  }, []);

  useEffect(() => {
    function outClick(event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>): any {
      const target = event.target as HTMLElement;
      
      if((Boolean(target.closest('[data-component="profile-manager"]')) == false) && menusStatuses.current.profile) {
        setProfileOpen(false);
      }
    }

    document.documentElement.addEventListener("click", outClick as any);
    document.documentElement.addEventListener("touchend", outClick as any);

    return () => {
      document.documentElement.removeEventListener("click", outClick as any);
      document.documentElement.removeEventListener("touchend", outClick as any);
    }
  }, []);

  return (
    <AppLayoutDocument key="AppLayout">
      <LayoutHeader data-menu={menuOpen.toString()}>
        <LogoMenu>
          <Link to={appRoutes.App}><Logo /></Link>

          <IconButton data-component="IconButton" className={styles.BurgerButton} aria-label="toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <Burger />
            <Clear />
          </IconButton>
        </LogoMenu>
        <EmptyBlock />
        <ProfileManager data-menu={profileOpen.toString()} data-component="profile-manager">
          <ProfileManagerName>{userName}</ProfileManagerName>

          <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={() => setProfileOpen(!profileOpen)}>
              <ProfileManagerIcon src={userAvatar} alt="user avatar" />

              <Box ml={1}>
                <ProfileManagerButton fontSize="large" />
              </Box>
            </Button>
          </div>

          <ProfileManagerMenu>
            <ProfileManagerPunkt>
              <SettingsBrightnessIcon />

              <Switch
                checked={themeConfiguration.currentTheme == ThemesEnum.dark}
                onChange={() => themeConfiguration.toggleTheme()}
                name="theme"
                color="primary"
              />
            </ProfileManagerPunkt>

            <ProfileManagerItem activeClassName={styles.ActiveLink} to="/some"><AccountCircleIcon /> Профиль</ProfileManagerItem>
            <ProfileManagerItem activeClassName={styles.ActiveLink} to="/some"><SettingsIcon /> Настройки</ProfileManagerItem>
            <ProfileManagerPunkt onClick={exitHandel}><ExitToAppIcon /> Выйти</ProfileManagerPunkt>
          </ProfileManagerMenu>
        </ProfileManager>
      </LayoutHeader>
      <LayoutBody data-menu={menuOpen.toString()}>
        <LayoutMenu>
          <NavItem to="/some" activeClassName={styles.ActiveLink}><ViewListIcon fontSize="large" /> <span>Уроки</span></NavItem>
          <NavItem to="/some" activeClassName={styles.ActiveLink}><InfoIcon fontSize="large" /> <span>О проекте</span></NavItem>

          <Secure politic={ByRole([UserRoles.Teacher, UserRoles.Admin])}>
            <NavItem to="/some" activeClassName={styles.ActiveLink}><SupervisedUserCircleIcon fontSize="large" /> <span>Админ панель</span></NavItem>
          </Secure>
        </LayoutMenu>
        <LayoutContent>
          {children}
        </LayoutContent>
      </LayoutBody>
    </AppLayoutDocument>
  );
};