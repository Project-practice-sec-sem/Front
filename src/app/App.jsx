import {Header} from "../widgets/Header/Header.jsx";
import '../../index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import {theme} from "../shared/style/theme/index.ts";
import {AiAssistant} from "../widgets/ Ai-assistant/Ai-assistant.jsx";

const appTheme = createTheme({
    typography: {
        fontFamily: '"Ubuntu", Arial, sans-serif',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Header />
            <AiAssistant />
            <AiAssistant />
            <AiAssistant />
        </ThemeProvider>
    );
};

export default App;
