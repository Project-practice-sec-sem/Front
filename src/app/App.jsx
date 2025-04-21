import { useState } from 'react';
import { Header } from '../widgets/Header/Header.jsx';
import { MetalsTable } from '../widgets/table/table.jsx';
import { ChartPage } from '../pages/graphic.jsx';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '../shared/style/theme/index.ts';
import { AiAssistant } from '../widgets/ Ai-assistant/Ai-assistant.jsx';

const App = () => {
  const [selectedMetal, setSelectedMetal] = useState('Все');
  const [showChart, setShowChart] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleHomeClick = () => {
    setShowChart(false);
    setSelectedMetal('Все');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header setSelectedMetal={setSelectedMetal} onHomeClick={handleHomeClick} />
      <AiAssistant />
      {showChart ? (
        <ChartPage metalData={selectedRow} />
      ) : (
        <MetalsTable
          selectedMetal={selectedMetal}
          onViewClick={row => {
            setSelectedRow(row);
            setShowChart(true);
          }}
        />
      )}
    </ThemeProvider>
  );
};
export default App;
