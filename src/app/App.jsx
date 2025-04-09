import {Header} from "../widgets/Header/Header.jsx";
import '../../index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "../shared/style/theme/index.ts";
import {AiAssistant} from "../widgets/ Ai-assistant/Ai-assistant.jsx";

const App  = () => {
  return (
      <ThemeProvider theme={theme}>
          <Header />
          <AiAssistant />
      </ThemeProvider>
  )
}

export default App
