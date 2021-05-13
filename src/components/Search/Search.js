import { Box, Input } from "theme-ui";
import "./Search.css";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <Box sx={{ maxWidth: "450px", margin: "auto" }}>
      <Box>
        <BiSearch id="input_icon" />
        <Input
          sx={{ fontFamily: "Roboto", border: "none", boxShadow: "none" }}
          placeholder="Insira aqui o nome da cidade"
        />
      </Box>
    </Box>
  );
}

export default Search;
