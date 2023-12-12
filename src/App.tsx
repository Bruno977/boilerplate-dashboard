import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ToggleThemeContextProvider } from './contexts/ToggleThemeContext';

function App() {
  return (
    <ToggleThemeContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ToggleThemeContextProvider>
  );
}

export default App;
