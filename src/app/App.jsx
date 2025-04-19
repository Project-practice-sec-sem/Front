import { Header } from '../widgets/Header/Header.jsx';
import '../../index.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AiAssistant } from '../widgets/ Ai-assistant/Ai-assistant.jsx';
import { theme } from '../shared/style/theme/index.ts';
import { MetalsTable } from '../widgets/table/table.jsx';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <AiAssistant />
      <MetalsTable />
    </ThemeProvider>
  );
};

export default App;
