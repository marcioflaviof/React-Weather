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
            border: "none",
            boxShadow: "none",
            height: "50px",
            fontSize: [2, 3],
            width: ["80%", "100%"],
            margin: ["auto", null],
            "::-webkit-input-placeholder": {
              paddingLeft: "0.5rem",
            },
          }}
          placeholder="Insira aqui o nome da cidade"
        />
      </Box>
    </Box>
  );
}

export default Search;
