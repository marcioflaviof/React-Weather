import { Box, Button, Input } from "theme-ui";
import { GrSearch } from "react-icons/gr";
import React, { useState } from "react";
import { useWeatherContext } from "../../providers/weather/Context";

function Search({ sx }) {
  const [city, setCity] = useState();

  const { setParams } = useWeatherContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setParams({ city });
  };

  return (
    <Box
      sx={{
        ...sx,
        maxWidth: ["300px", "450px"],
        marginTop: "50px",
      }}
    >
      <Box as="form" onSubmit={handleSubmit}>
        <Button
          sx={{
            position: "absolute",
            marginLeft: ["250px", "375px"],
            marginTop: ["7px", "18px"],
            padding: ["5px", null],
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          <GrSearch size={"1.5em"} />
        </Button>
        <Input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{
            borderColor: "orange",
            padding: ["15px", "20px"],
            borderRadius: 0,
            outline: "none",
            fontSize: [0, 3],
          }}
          placeholder="Insira aqui o nome da cidade"
        />
      </Box>
    </Box>
  );
}

export default Search;
