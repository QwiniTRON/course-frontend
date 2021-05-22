import styled from 'styled-components';

export const AppCardBody = styled.div`
  width: min(100%, 550px);
  padding: ${props => props.theme.spacing(2)}px;
  background-color: ${props => props.theme.palette.layout.paper};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows[4]};
`;