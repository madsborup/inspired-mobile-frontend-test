import React from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

const Content = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${theme.spacing.large} auto 0;
`;

const AppViewWrapper: React.FC = ({ children }) => {
  return <Content>{children}</Content>;
};

export default AppViewWrapper;
