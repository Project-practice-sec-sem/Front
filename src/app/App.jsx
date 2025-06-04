import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Header } from '../widgets/Header/Header';
import { MetalsTable } from '../widgets/table/table';
import { AiAssistant } from '/src/widgets/ Ai-assistant/Ai-assistant.jsx';
import { ChartsSidebar } from '../widgets/Graphics/graphic';
import { theme } from '../shared/style/theme';
import ChartsLayout from '../pages/ChartsLayout';
import ChartPage from '../pages/graphicPage.jsx';

const AppWrapper = () => {
  const [selectedMetal, setSelectedMetal] = useState('Все');
  const navigate = useNavigate();

  const handleHomeClick = () => {
    setSelectedMetal('Все');
    navigate('/');
  };

  return (
    <>
      <Header setSelectedMetal={setSelectedMetal} onHomeClick={handleHomeClick} />
      <AiAssistant />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <MetalsTable selectedMetal={selectedMetal} />
              <ChartsSidebar />
            </>
          }
        />
        <Route path='/charts' element={<ChartsLayout />}>
          <Route path=':metal' element={<ChartPage />} />
          <Route index element={<ChartPage />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='*' element={<AppWrapper />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
