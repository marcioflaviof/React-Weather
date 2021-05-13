import { Box, Input } from "theme-ui";
import { BiSearch } from "react-icons/bi";

import "./Search.css";

function Search() {
  return (
    <Box
      sx={{
        maxWidth: "450px",
        margin: "auto",
        paddingTop: "1rem",
      }}
    >
      <Box>
        <BiSearch size={"2em"} id="input_icon" />
        <Input
          sx={{
            fontFamily: "Roboto",
            border: "none",
            boxShadow: "none",
            height: "50px",
            fontSize: 3,
            "::-webkit-input-placeholder": {
              paddingLeft: "0.5rem",
            },
            "@media (max-width: 38em)": {
              margin: "auto",
              fontSize: 2,
              width: "80%",
            },
          }}
          placeholder="Insira aqui o nome da cidade"
        />
      </Box>
    </Box>
  );
}

export default Search;
