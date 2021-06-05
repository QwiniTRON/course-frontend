import React from 'react';
import { MainImage } from './styled';

type AppImgProps = Partial<HTMLImageElement>

export const AppImg: React.FC<AppImgProps> = (props) => {
  return (
    <MainImage {...props as any} />
  );
};