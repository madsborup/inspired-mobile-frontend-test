import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../../reducers'
import { addName, setCurrentName } from '../../actions/names'
import { NameListItem } from '../../components/NameListItem'
import Input from '../../components/Input'
import { StyledNameList } from './style'

interface Props {
  names: string[],
  currentName: string | undefined,
  addName: (name: string) => void
  setCurrentName: (name: string) => void
}

const NameList: React.FC<Props> = ({ names, currentName }: Props) => {

  const [name, setName] = useState<string>()

  const onAddName = () => {
    if (name) {
      addName(name);
    }
  }
  
  return (
    <StyledNameList>
      <Input value={name} name='name' onChange={setName}></Input>
      {names.map(name => <NameListItem name={name} />)}
    </StyledNameList>
  )
}

const mapStateToProps = ({ names}: StoreState) => {
  return {
    names: names.items,
    currentName: names.currentName
  }
}

export default connect(mapStateToProps, { addName, setCurrentName })(NameList)