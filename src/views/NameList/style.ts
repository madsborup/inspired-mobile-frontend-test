import styled from 'styled-components'
import theme from '../../utils/theme'

export const StyledNameList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 100%;
  overflow-y: scroll;
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.large};
  margin: ${theme.spacing.large} 0;
  border-radius: ${theme.BORDER_RADIUS};
`;