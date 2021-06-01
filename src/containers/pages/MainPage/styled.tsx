import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AppColor } from '../../../App/style/theme/utilities/Colors';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${p => p.theme.spacing(2)}px;
  margin-top: 16px;
`;

export const MainLink = styled(Link)`
  color: ${p => p.theme.palette.accentBlue.main} !important;
  border: 1px solid ${p => p.theme.palette.accentBlue.main};
  padding: ${p => p.theme.spacing(1)}px;
  border-radius: 2px;
  text-align: center;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${p => AppColor.From(p.theme.palette.accentBlue.main).changeOpacity(-80).toRgba()};
  }
`;