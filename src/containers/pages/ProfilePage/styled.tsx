import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: ${props => props.theme.spacing(2)}px;
`;

export const NickBlock = styled.div`
  display: flex;
`;

export const AvatarButtons = styled.div`
  margin-top: ${p => p.theme.spacing(2)}px;

  display: flex;
  align-items: center;
  gap: 0 8px;
`;

export const useStyles = makeStyles(appTheme => {
  const theme = appTheme as Theme;

  return {
    nickSaveButton: {
      marginLeft: '16px',
      width: '54px',
      height: '54px'
    }
  };
});