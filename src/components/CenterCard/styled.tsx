import styled from 'styled-components';
import { CenterMixin } from '../../style';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Container = styled.div`
  min-height: 100%;
  ${CenterMixin}
  padding: ${props => props.theme.spacing(2)}px;
`;