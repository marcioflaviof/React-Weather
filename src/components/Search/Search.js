import { Box, Input } from "theme-ui";
import { GrSearch } from "react-icons/gr";

function Search({ sx }) {
  return (
    <Box
      sx={{
        ...sx,
        maxWidth: ["300px", "450px"],
        marginTop: "50px",
      }}
    >
      <Box>
        <Box
          sx={{
            position: "absolute",
            marginLeft: ["260px", "405px"],
            marginTop: ["10px", "23px"],
          }}
        >
          <GrSearch size={"1.5em"} id="input_icon" />
        </Box>
        <Input
          sx={{
            borderColor: "orange",
            padding: ["15px", "20px"],
            borderRadius: 0,
            outline: "none",
            fontSize: [0, 2, 3],
          }}
          placeholder="Insira aqui o nome da cidade"
        />
      </Box>
    </Box>
  );
}

export default Search;
