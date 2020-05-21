import styled from 'styled-components'
import theme from '../../utils/theme'

export const DeleteIcon = styled.div`
  position: absolute;
  display: none;
  color: ${theme.font.colors.alt};
  font-size: 28px;
  font-weight: 600;
  top: 0;
  right: -22px;
  padding-left: ${theme.spacing.xsmall};

  &:hover {
    color: ${theme.font.colors.heading}
  }
`;

export const StyledNameListItem = styled.div`
  position: relative;
  padding: ${theme.spacing.xsmall} ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.xsmall};
  font-size: ${theme.font.size.h3};
  text-align: center;
  border: 1px solid ${theme.colors.border};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.border};

    ${DeleteIcon} {
      display: inline;
    }
  }
`;