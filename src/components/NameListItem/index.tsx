import React from 'react';
import { StyledNameListItem, DeleteIcon } from './style';

interface Props {
  name: string;
  deleteOnClick: Function;
}

export const NameListItem: React.FC<Props> = ({ name, deleteOnClick }: Props) => {
  return (
    <StyledNameListItem>
      {name}
      <DeleteIcon onClick={() => deleteOnClick()}>×</DeleteIcon>
    </StyledNameListItem>
  );
};
