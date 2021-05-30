import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0 ${p => p.theme.spacing(2)}px;
  align-items: center;
`;