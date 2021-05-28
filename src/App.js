import { ThemeProvider, Text, Box } from "theme-ui";
import theme from "./theme/theme";
import Divider from "./components/Divider/Divider";
import Search from "./components/Search/Search";
import Cities from "./components/Cities/Cities";
import DetailsCard from "./components/DetailsCard/DetailsCard";
import WeatherProvider from "../src/providers/weather/Provider";

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

        <WeatherProvider>
          <DetailsCard
            sx={{
              display: ["none", "none", "block", "block"],
              margin: "30px auto 0px",
            }}
          />
          <Search sx={{ margin: ["30px", "25px auto 0px"] }} />
        </WeatherProvider>
        <Divider sx={{ margin: "50px 0px 20px" }} />
        <Cities />
      </Box>
    </ThemeProvider>
  );
}

export default App;
