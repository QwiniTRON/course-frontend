import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Theme } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const collapsedMenu = "100px";
const mobileModeMedia = "724px";


export const AppLayoutDocument = styled.div`
  background-color: ${props => props.theme.palette.layout.main};

  min-height: 100%;
  position: relative;
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
  object-fit: cover;
  object-position: center;
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

  ${AppLayoutDocument}[data-profile-menu="true"] & {
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

export const ProfileManagerName = styled.div`
  word-break: break-all;
  word-wrap: break-word;
`;

export const LayoutContent = styled.div`
  word-break: break-all;
  word-wrap: break-word;
`;

export const LayoutMenu = styled.nav`
  background-color: ${props => props.theme.palette.layout.paper};
  padding: ${props => props.theme.spacing(2)}px;

  position: sticky;
  top: 120px;
  align-self: flex-start;
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
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.palette.layout.main};
  z-index: 2;

  ${AppLayoutDocument}[data-menu="true"] & {
    grid-template-columns: ${collapsedMenu} 1fr 290px;
  }
  ${AppLayoutDocument}[data-menu="true"] & ${LogoMenu} a {
    display: none;
  }

  @media screen and (max-width: ${mobileModeMedia}) {
    ${AppLayoutDocument}[data-menu="true"] & ${Clear} {
      display: block;
    }
    ${AppLayoutDocument}[data-menu="true"] & ${Burger} {
      display: none;
    }
    &{
      grid-template-columns: 75px 0 1fr !important;
    }

    ${AppLayoutDocument}[data-menu="true"] {

    }

    & ${ProfileManagerIcon} {
        width: 36px; 
        height: 36px; 
    }
  }
`;

export const LayoutBody = styled.main`
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 0 4px;
  word-break: break-all;

  ${AppLayoutDocument}[data-menu="true"] & {
    grid-template-columns: ${collapsedMenu} 1fr;
  }

  ${AppLayoutDocument}[data-menu="true"] & ${LayoutMenu} {
    padding-left: 34px;
  }

  ${AppLayoutDocument}[data-menu="true"] & ${NavItem} > span {
    display: none;
  }

  @media screen and (max-width: ${mobileModeMedia}) {
    & {
      grid-template-columns: 1fr !important;
    }

    & ${LayoutMenu} {
      visibility: hidden;
      opacity: 0;
      position: fixed;
      top: ${props => props.theme.spacing(1)}px;
      left: ${props => props.theme.spacing(1)}px;
      right: ${props => props.theme.spacing(1)}px;
      bottom: ${props => props.theme.spacing(1)}px;

      display: flex;
      flex-direction: column-reverse;

      padding-bottom: 85px;

      box-shadow: 0 0 16px 0 #333;

      z-index: 15;
      border-radius: 8px;
      border: 1px solid ${props => props.theme.palette.layout.border};

      transition: visibility 0.3s, opacity 0.3s;
    }

    ${AppLayoutDocument}[data-menu="true"] & ${LayoutMenu} {
      visibility: visible;
      opacity: 1;
    }

    ${AppLayoutDocument}[data-menu="true"] & ${NavItem} > span {
      display: flex;
    }
  }
`;

export const MenuToggler = styled(IconButton)`
  transition: transform 0.2s, background-color 0.3s;
  color: ${props => props.theme.palette.layout.contrast};

  button&:hover {
    background-color: ${props => props.theme.palette.accentBlue.main}
  }

  ${AppLayoutDocument}[data-menu="true"] & {
    transform: rotateZ(90deg);
  }
  ${Clear} {
    display: none;
  }
  ${AppLayoutDocument}[data-menu="true"] & ${Clear} {
    display: block;
  }
  ${AppLayoutDocument}[data-menu="true"] & ${Burger} {
    display: none;
  }

  @media screen and (max-width: ${mobileModeMedia}) {
    button&{
      padding: 16px;
      background-color: ${props => props.theme.palette.layout.paper};
      border: 1px solid ${props => props.theme.palette.layout.border};
      position: fixed;
      box-shadow: ${props => props.theme.shadows[4]};
      bottom: ${props => props.theme.spacing(2)}px;
      right: ${props => props.theme.spacing(2)}px;
      z-index: 25;
    }
  }
`;

export const ProfileManagerButton = styled(MoreVertIcon)`
  color: ${props => props.theme.palette.layout.contrast};
`;

export const useStyles = makeStyles((theme) => {
  const appTheme = theme as Theme;

  return {
    ActiveLink: {
      color: appTheme.palette.accentBlue.main
    },

    mainMenuCloseButton: {
      display: "none",
    },

    logoToggler: {
      '@media screen and (max-width: 724px)': {
        display: 'none'
      }
    }
  };
});