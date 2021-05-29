import styled from 'styled-components';
import { AppCard } from '../../../components';

export const AdminLessonsContainer = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const AdminLessonsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${p => p.theme.spacing(2)}px;
  margin-top: ${p => p.theme.spacing(2)}px;

  @media screen and (max-width: 600px) {
  }
`;  

export const AdminLessonsItem = styled(AppCard)`
  width: 100%;
  height: 100%;
`;

export const AdminLessonsItemItems = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;

  margin-top: 0.5rem;
  gap: 1rem;
`;