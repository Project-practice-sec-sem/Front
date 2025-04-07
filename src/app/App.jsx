import {Header} from "../widgets/Header/Header.jsx";
import '../../index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "../shared/style/theme/index.ts";

const App  = () => {
  return (
      <ThemeProvider theme={theme}>
          <Header />

      </ThemeProvider>
  )
}

export default App
