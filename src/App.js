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
            padding: "3rem",
            "@media (max-width: 38em)": {
              padding: "2rem",
            },
          }}
        >
          <Text
            sx={{
              fontSize: 7,
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "white",
              "@media (max-width: 38em)": {
                fontSize: 6,
              },
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
