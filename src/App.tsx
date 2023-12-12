import { Button, ConfigProvider } from 'antd';
import { lightConfig, lightTheme } from './styles/theme/lightMode';
import { ThemeProvider } from 'styled-components';
import { darkConfig } from './styles/theme/darkMode';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

function App() {
  return (
    <ConfigProvider theme={darkConfig}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
