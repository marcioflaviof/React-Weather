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
          // Don't know why but if i put [auto,auto], or only let auto doesn't have the same result
          margin: "auto",
          marginTop: "5rem",
          maxWidth: "700px",
          "@media (max-width: 38em)": {
            margin: "auto",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            padding: ["2rem", "3rem"],
          }}
        >
          <Text
            sx={{
              fontSize: [5, 6, 7],
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
