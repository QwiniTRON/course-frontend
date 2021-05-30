import styled from 'styled-components';
import { AppColor } from '../../../App/style/theme/utilities/Colors';
import { AppCard } from '../../../components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing(2)}px;
`;

export const LessonsContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${p => p.theme.spacing(2)}px;
  margin-top: ${p => p.theme.spacing(2)}px;

  @media screen and (max-width: 600px) {
  }
`;  

export const LessonsItem = styled(AppCard)`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${p => p.theme.palette.layout.border};

  padding: ${p => p.theme.spacing(2)}px;
`;

export const LessonsItemDisabled = styled(LessonsItem)`
  background-color: ${p => p.theme.palette.action.disabled};
`;