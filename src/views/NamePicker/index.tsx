import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { addName, setCurrentName } from '../../actions';
import theme from '../../utils/theme';
import Input from '../../components/Input';
import Button from '../../components/Button'
import NameList from '../NameList';

interface Props {
  names: string[];
  currentName: string | undefined;
  addName: typeof addName;
  setCurrentName: typeof setCurrentName;
}

const StyledNamePicker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.spacing.medium};
  border: 1px solid ${theme.colors.border};
`;

const NamePicker: React.FC<Props> = ({ names, currentName, addName, setCurrentName }: Props) => {
  const [name, setName] = useState<string>('');

  const onAddName = () => {
    if (name && !names.includes(name)) {
      addName(name);
    }
  };

  const onSelectRandomName = () => {
    let arrayWithoutCurrentName = names.filter(name => name !== currentName);

    setCurrentName(arrayWithoutCurrentName[Math.floor(Math.random() * arrayWithoutCurrentName.length)]);
  };

  return (
    <StyledNamePicker>
      <Input
        label="Type a name to add it to the list"
        value={name}
        name="name"
        onChange={setName}
      ></Input>
      <Button onClick={onAddName} primary>Add Name</Button>
      <NameList names={names} />
      <Button onClick={onSelectRandomName} primary>Select a random name</Button>
      <Input
        label="Selected name"
        value={currentName}
        name="currentName"
        disabled
      ></Input>
    </StyledNamePicker>
  );
};

const mapStateToProps = ({ names }: StoreState) => {
  return {
    names: names.items,
    currentName: names.currentName,
  };
};

export default connect(mapStateToProps, { addName, setCurrentName })(NamePicker);
