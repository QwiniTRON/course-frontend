import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

const collapsedMenu = "100px";
const mobileModeMedia = "600px";


export const AppLayoutDocument = styled.div`
  background-color: ${props => props.theme.palette.layout.main};

  min-height: 100%;
`;

export const EmptyBlock = styled.div`
  background-color: ${props => props.theme.palette.layout.paper};
`;

export const ProfileManager = styled.div`
  background-color: ${props => props.theme.palette.layout.paper};
  padding: ${props => props.theme.spacing(2)}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const ProfileManagerIcon = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
`;

export const ProfileManagerMenu = styled.div`
  background-color: ${props => props.theme.palette.layout.paper};

  padding: ${props => props.theme.spacing(2)}px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;

  opacity: 0;
  visibility: hidden;

  border-top: 4px solid ${props => props.theme.palette.layout.main};
  z-index: ${props => props.theme.zIndex.tooltip};

  transition: visibility 0.3s, opacity 0.3s;

  box-shadow: ${props => props.theme.shadows[4]};

  ${ProfileManager}[data-menu="true"] & {
    visibility: visible;
    opacity: 1;
  }
`;


const ProfileManagerItemBase = `
  display: flex;
  gap: 0 8px;
  align-items: center;
  cursor: pointer;
  transition: color 0.3s;
`;

export const ProfileManagerItem = styled(NavLink)`
  margin: ${props => props.theme.spacing(2)}px 0;
  ${ProfileManagerItemBase}

  &:hover {
    color: ${props => props.theme.palette.accentBlue.main};
  }
`;

export const ProfileManagerPunkt = styled.div`
  margin: ${props => props.theme.spacing(2)}px 0;
  ${ProfileManagerItemBase}

  &:hover {
    color: ${props => props.theme.palette.accentBlue.main};
  }
`;

export const LayoutContent = styled.div`
`;

export const LayoutMenu = styled.nav`
  background-color: ${props => props.theme.palette.layout.paper};
  padding: ${props => props.theme.spacing(2)}px;
`;

export const Logo = styled(BookIcon)`
  svg& {
    font-size: 48px;
  }
`;

export const Burger = styled(MenuIcon)`
  svg& {
    font-size: 48px;
  }
`;

export const Clear = styled(ClearIcon)`
  svg& {
    font-size: 48px;
  }
`;

export const LogoMenu = styled.div`
  background-color: ${props => props.theme.palette.layout.paper};
  padding: ${props => props.theme.spacing(2)}px;

  display: flex;
  gap: 0 8px;
  align-items: center;
  justify-content: space-between;
`;

export const NavItem = styled(NavLink)`
  display: flex;
  gap: 0 16px;
  margin: ${props => props.theme.spacing(2)}px 0;
  align-items: center;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.palette.accentBlue.main};
  }
`;

export const LayoutHeader = styled.header`
  display: grid;
  grid-template-columns: 340px 1fr 290px;
  grid-template-rows: auto auto;
  gap: 4px;

  @media screen and (max-width: 724px) {
    & {
      grid-template-columns: 340px 0 1fr;
    }

    & ${ProfileManagerIcon} {
        width: 36px; 
        height: 36px; 
    }
  }

  &[data-menu="true"] {
    grid-template-columns: ${collapsedMenu} 1fr 290px;
  }
  &[data-menu="true"] ${LogoMenu} a {
    display: none;
  }

  &[data-menu="true"] button[data-component="IconButton"] {
    transform: rotateZ(90deg);
  }
  &[data-menu="false"] ${Clear} {
    display: none;
  }
  &[data-menu="true"] ${Clear} {
    display: none;
  }

  @media screen and (max-width: ${mobileModeMedia}) {
    &[data-menu="true"] ${Clear} {
      display: block;
    }
    &[data-menu="true"] ${Burger} {
      display: none;
    }
    &{
      grid-template-columns: 75px 0 1fr;
    }
    &[data-menu="true"] {
      grid-template-columns: 75px 0 1fr;
    }
  }
`;

export const LayoutBody = styled.main`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 0 4px;

  &[data-menu="true"] {
    grid-template-columns: ${collapsedMenu} 1fr;
  }

  &[data-menu="true"] ${LayoutMenu} {
    padding-left: 34px;
  }

  &[data-menu="true"] ${NavItem} > span {
    display: none;
  }

  @media screen and (max-width: ${mobileModeMedia}) {
    & {
      grid-template-columns: 0 1fr;
    }

    & ${LayoutMenu} {
      visibility: hidden;
      opacity: 0;
      position: fixed;
      top: ${props => props.theme.spacing(1)}px;
      left: ${props => props.theme.spacing(1)}px;
      right: ${props => props.theme.spacing(1)}px;
      bottom: ${props => props.theme.spacing(1)}px;

      box-shadow: 0 0 16px 0 #333;

      z-index: 15;
      border-radius: 8px;
      border: 1px solid ${props => props.theme.palette.layout.border};

      transition: visibility 0.3s, opacity 0.3s;
    }

    &[data-menu="true"] ${LayoutMenu} {
      visibility: visible;
      opacity: 1;
    }

    &[data-menu="true"] ${NavItem} > span {
      display: flex;
    }
  }
`;

export const useStyles = makeStyles((theme) => {
  const appTheme = theme as Theme;
  return {
    BurgerButton: {
      transition: "transform 0.2s"
    },

    '@media screen and (max-width: 601px)': {
      BurgerButton: {
        padding: "16px",
        backgroundColor: appTheme.palette.layout.paper,
        border: `1px solid ${appTheme.palette.layout.border}`,
        position: 'fixed',
        color: appTheme.palette.layout.contrast,
        boxShadow: appTheme.shadows[4],
        bottom: `${appTheme.spacing(2)}px`,
        right: `${appTheme.spacing(2)}px`,
        zIndex: 25,
      }
    },

    ActiveLink: {
      color: appTheme.palette.accentBlue.main
    }
  };
});