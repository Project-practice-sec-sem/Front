import {Header} from "../widgets/Header/Header.jsx";
import '../../index.css'
import {ThemeProvider} from "@mui/material";
import {theme} from "../shared/style/theme/index.ts";
import { Footer } from '../widgets/Footer/Footer.jsx';

const App  = () => {
  return (
      <ThemeProvider theme={theme}>
          <Header />
          <Footer />
      </ThemeProvider>
  )
}

export default App
