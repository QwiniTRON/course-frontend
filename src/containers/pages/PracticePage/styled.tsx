import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { AppColor } from '../../../App/style/theme/utilities/Colors';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const DeleteButton = styled(Button)`
  button& {
    background-color: ${p => p.theme.palette.accentRed.dark};

    &:hover {
      background-color: ${p => AppColor.From(p.theme.palette.accentRed.dark).shadeLightColor(-25).toRgba()};
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0 ${p => p.theme.spacing(2)}px;
  margin-top: ${p => p.theme.spacing(2)}px;
`;

export const DownloadLink = styled.a`
  display: inline-block;
  margin: ${p => p.theme.spacing(2)}px 0;
`;