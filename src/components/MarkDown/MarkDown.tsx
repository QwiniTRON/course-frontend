import React from 'react';
import showdown from 'showdown';

import { MarkDownContainer } from './styled';



showdown.setOption('strikethrough', true);
showdown.setOption('tables', true);
showdown.setOption('tablesHeaderId', true);
showdown.setOption('tasklists', true);
showdown.setOption('emoji', true);
showdown.setOption('tasklists', true);
showdown.setOption('tablesHeaderId', true);
showdown.setOption('parseImgDimensions', true);

type MarkDownProps = { md: string }

export const MarkDown: React.FC<MarkDownProps> = (props) => {
  const html = new showdown.Converter().makeHtml(props.md);

  return (
    <MarkDownContainer dangerouslySetInnerHTML={{__html: html}} />
  );
};