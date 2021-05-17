import { ThemeProvider, Text, Box } from "theme-ui";
import theme from "./theme/theme";
import Divider from "./components/Divider/Divider";
import Search from "./components/Search/Search";
import Cities from "./components/Cities/Cities";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: "auto",
          maxWidth: "700px",
        }}
      >
        <Box
          sx={{
            margin: ["50px 100px 0px 50px", "100px 0px 0px"],
            textAlign: ["left", "center"],
          }}
        >
          <Text variant="heading">Previsão do tempo</Text>
        </Box>
        <Search sx={{ margin: ["30px", "80px auto 0px"] }} />
        <Divider sx={{ margin: "50px 0px 20px" }} />
        <Cities />
      </Box>
    </ThemeProvider>
  );
}

export default App;
