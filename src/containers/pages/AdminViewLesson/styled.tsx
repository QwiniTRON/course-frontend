import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { AppColor } from '../../../App/style/theme/utilities/Colors';

export const AdminLessonViewContainer = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const DeleteButton = styled(Button)`
  button& {
    background-color: ${p => p.theme.palette.accentRed.dark};

    &:hover {
      background-color: ${p => AppColor.From(p.theme.palette.accentRed.dark).shadeLightColor(-25).toRgba()};
    }
  }
`;