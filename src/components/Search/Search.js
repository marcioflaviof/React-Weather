import { Box, Input } from "theme-ui";
import { BiSearch } from "react-icons/bi";

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
        <Box
          sx={{
            position: "absolute",
            marginLeft: ["16rem", "22rem", "25rem"],
            marginTop: "10px",
          }}
        >
          <BiSearch size={"2em"} id="input_icon" />
        </Box>
        <Input
          sx={{
            border: "none",
            boxShadow: "none",
            height: "50px",
            fontSize: [0, 2, 3],
            width: ["60%", "80%", "100%"],
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
