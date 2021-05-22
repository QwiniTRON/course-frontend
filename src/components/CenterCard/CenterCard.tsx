import React from 'react';
import { Wrap, Container } from './styled';

type CenterCardProps = {}

export const CenterCard: React.FC<CenterCardProps> = (props) => {
  return (
    <Wrap>
      <Container>
          {props.children as any}
      </Container>
    </Wrap>
  );
};