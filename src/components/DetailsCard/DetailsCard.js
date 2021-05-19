import { Box, Text } from "@theme-ui/components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const weekText = {
  days: {
    marginLeft: "25px",
    fontWeight: "bold",
  },

  temp: {
    marginLeft: "20px",
    fontWeight: "bold",
    color: "#F98E01",
  },
};

function DetailsCard({ sx }) {
  return (
    <Box
      sx={{
        ...sx,
        background: "whitesmoke",
        maxWidth: ["300px", "450px"],
        height: "300px",
      }}
    >
      <Box
        sx={{
          padding: "20px",
          marginLeft: "20px",
          fontSize: "2",
          fontWeight: "bold",
        }}
      >
        <Text>Niterói, Rj - Brasil</Text>
      </Box>
      <Box
        sx={{
          padding: "5px 20px",
          marginLeft: "20px",
          fontSize: "6",
          fontWeight: "bold",
        }}
      >
        <Text>20ºC Nublado</Text>
      </Box>
      <Box
        sx={{
          justifyContent: "flex-start",
          padding: "10px",
          margin: "0px 30px",
        }}
      >
        <BsArrowDown color={"#F98E01"} />
        <Text
          sx={{
            marginRight: "20px",
          }}
        >
          16º
        </Text>

        <BsArrowUp color={"#F98E01"} />
        <Text>25º</Text>
        <Text
          sx={{
            marginLeft: "23px",
          }}
        >
          Sensação 19ºC
        </Text>
      </Box>
      <Box
        sx={{
          padding: "10px",
          marginLeft: "30px",
        }}
      >
        <Text>Vento 18km/h</Text>
        <Text
          sx={{
            marginLeft: "25px",
          }}
        >
          Umidade 89%
        </Text>
      </Box>
      <Box
        sx={{
          margin: "20px 40px 20px",
          background: "#F98E01",
          opacity: "70%",
          height: "2px",
          width: "80%",
        }}
      />
      <Box>
        <Text sx={{ ...weekText.days, padding: "0px 0px 0px 15px" }}>
          Terça
        </Text>
        <Text sx={{ ...weekText.days }}>Quarta</Text>
        <Text sx={{ ...weekText.days }}>Quinta</Text>
        <Text sx={{ ...weekText.days }}>Sexta</Text>
        <Text sx={{ ...weekText.days }}>Sábado</Text>
      </Box>
      <Box>
        <Text sx={{ ...weekText.temp, padding: "0px 0px 0px 20px" }}>
          18º 26º
        </Text>
        <Text sx={{ ...weekText.temp }}>18º 28º</Text>
        <Text sx={{ ...weekText.temp }}>19º 30º</Text>
        <Text sx={{ ...weekText.temp }}>23º 35º</Text>
        <Text sx={{ ...weekText.temp }}>23º 37º</Text>
      </Box>
    </Box>
  );
}

export default DetailsCard;
