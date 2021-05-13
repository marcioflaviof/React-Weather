import { ThemeProvider, Text, Box } from "theme-ui";
import theme from "./theme/theme";
import Divider from "./components/Divider/Divider";
import Search from "./components/Search/Search";
import Cities from "./components/Cities/Cities";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: "auto", marginTop: "5rem", maxWidth: "700px" }}>
        <Box sx={{ textAlign: "center", padding: "3rem" }}>
          <Text
            sx={{
              fontSize: 6,
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Previsão do tempo
          </Text>
        </Box>
        <Search />
        <Divider />
        <Cities />
      </Box>
    </ThemeProvider>
  );
}

export default App;
