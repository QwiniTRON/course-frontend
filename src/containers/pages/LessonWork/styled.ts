import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const InstructionLink = styled.a`
  color: ${p => p.theme.palette.accentBlue.main};

  &:visited {
    color: ${p => p.theme.palette.accentBlue.main};
  }
`;