import { Box, Input } from "theme-ui";
import "./Search.css";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div className="box">
      <Box>
        <BiSearch id="input_icon" />
        <Input placeholder="Insira aqui o nome da cidade" />
      </Box>
    </div>
  );
}

export default Search;
