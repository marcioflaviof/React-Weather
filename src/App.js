import { ThemeProvider, Text } from "theme-ui";
import Divider from "./components/Divider/Divider";
import Search from "./components/Search/Search";
import theme from "./theme/theme";
import "./App.css";
import Cities from "./components/Cities/Cities";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="centralize">
        <div className="centralize-text">
          <Text
            sx={{
              fontSize: 6,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Previsão do tempo
          </Text>
        </div>
        <Search />
        <Divider />
        <Cities />
      </div>
    </ThemeProvider>
  );
}

export default App;
