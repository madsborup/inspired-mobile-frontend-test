import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

interface Props {
  label?: string;
  name: string;
  value: string | undefined;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const StyledInput = styled.input`
  font-size: ${theme.font.size.regular};
  font-weight: 400;
  width: 100%;
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.background};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  margin-bottom: ${theme.spacing.small};
  color: ${theme.font.colors.text};
  min-height: 40px;
  box-shadow: none;
  outline: none;
  resize: none;
`;

export const StyledLabel = styled.label`
  font-size: ${theme.font.size.regular};
  font-weight: 500;
  color: ${theme.font.colors.textMuted};
  margin: ${theme.spacing.small} 0 ${theme.spacing.xsmall};
`;



const Input: React.FC<Props> = ({ label, ...props }: Props) => {
  return (
    <React.Fragment>
      {label && <StyledLabel htmlFor={props.name}>{label}</StyledLabel>}
      <StyledInput
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        onChange={e => props.onChange && props.onChange(e.target.value)}
      />
    </React.Fragment>
  );
};

export default Input;
