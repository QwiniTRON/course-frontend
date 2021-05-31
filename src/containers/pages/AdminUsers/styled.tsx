import styled from 'styled-components';
import { AppCard } from '../../../components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const Search = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 0;
  align-items: center;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(226px, 1fr));
  gap: ${p => p.theme.spacing(2)}px;
  margin-top: ${p => p.theme.spacing(2)}px;

  @media screen and (max-width: 600px) {
  }
`;  

export const Item = styled(AppCard)`
  width: 100%;
  height: 100%;
`;

export const ItemItems = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;

  margin-top: 0.5rem;
  gap: 1rem;
`;