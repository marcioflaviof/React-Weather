import { ThemeProvider, Text } from "theme-ui";
import Search from "./components/Search/Search";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Text
        sx={{
          fontSize: 4,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Previsão do Tempo
      </Text>
      <Search />
    </ThemeProvider>
  );
}

export default App;
