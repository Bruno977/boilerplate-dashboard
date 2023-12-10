import { Button, ConfigProvider } from 'antd';
import { lightConfig, lightTheme } from './styles/theme/lightMode';
import { ThemeProvider } from 'styled-components';
import { darkConfig } from './styles/theme/darkMode';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ConfigProvider theme={darkConfig}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Button type="dashed">Button</Button>
        <Button type="primary">Button</Button>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
