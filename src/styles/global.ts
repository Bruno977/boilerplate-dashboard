import { Content } from 'antd/es/layout/layout';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  html,
  body {
    /* background-color: ${(props) => props.theme.colors.mauve1}; */
    font-family: 'Jost', sans-serif;
    width: 100%;
    /* ${(props) => props.theme.transition} */
  }
  input, label{
    font-family: 'Roboto', sans-serif;
  }
  label{
    font-weight: 500;
  }
  a{
    text-decoration: none;
  }
  ol, ul {
     list-style: none; 
  }
  img {
    max-width: 100%; 
}
`;

export const ContentAntd = styled(Content)`
  padding: 24px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mauve2};
  border-radius: 6px;
`;
