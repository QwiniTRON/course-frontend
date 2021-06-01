import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const Content = styled.div`
  display: inline-grid;
  grid-template-columns: repeat(3, auto);
  gap: 1rem;
  margin-top: 1rem;
`;

export const RoleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  padding: 1px 0;
`;