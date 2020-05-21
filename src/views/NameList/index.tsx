import React from 'react'
import { connect } from 'react-redux' 
import { deleteName } from '../../actions'
import { NameListItem } from '../../components/NameListItem'
import { StyledNameList } from './style'

interface Props {
  names: string[]
  deleteName: typeof deleteName
}

const NameList: React.FC<Props> = ({ names, deleteName }: Props) => {
  return (
    <StyledNameList>
      {names.map((name, i) => <NameListItem name={name} key={i} deleteOnClick={() => deleteName(name)} />)}
    </StyledNameList>
  )
}

export default connect(null, { deleteName })(NameList)
