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

const city = {
  name: "Niterói",
  state: "RJ",
  country: "Brasil",
  temp: "20ºC",
  weather: "Nublado",
  min_temp: "16º",
  max_temp: "25º",
  sensation: "19ºC",
  wind: "18km/h",
  humidity: "89%",
  weekDays: {
    dayOne: {
      name: "Terça",
      min: "18º",
      max: "26º",
    },
    dayTwo: {
      name: "Quarta",
      min: "18º",
      max: "28º",
    },
    dayThree: {
      name: "Quinta",
      min: "19º",
      max: "30º",
    },
    dayFour: {
      name: "Sexta",
      min: "23º",
      max: "35º",
    },
    dayFive: {
      name: "Sábado",
      min: "23º",
      max: "37º",
    },
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
        <Text>
          {city.name}, {city.state} - {city.country}
        </Text>
      </Box>
      <Box
        sx={{
          padding: "5px 20px",
          marginLeft: "20px",
          fontSize: "6",
          fontWeight: "bold",
        }}
      >
        <Text>
          {city.temp} {city.weather}
        </Text>
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
            fontWeight: "bold",
          }}
        >
          {city.min_temp}
        </Text>

        <BsArrowUp color={"#F98E01"} />
        <Text
          sx={{
            fontWeight: "bold",
          }}
        >
          {city.max_temp}
        </Text>
        <Text
          sx={{
            marginLeft: "23px",
          }}
        >
          Sensação {city.sensation}
        </Text>
      </Box>
      <Box
        sx={{
          padding: "10px",
          marginLeft: "30px",
        }}
      >
        <Text>Vento {city.wind}</Text>
        <Text
          sx={{
            marginLeft: "25px",
          }}
        >
          Umidade {city.humidity}
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
          {city.weekDays.dayOne.name}
        </Text>
        <Text sx={{ ...weekText.days }}>{city.weekDays.dayTwo.name}</Text>
        <Text sx={{ ...weekText.days }}>{city.weekDays.dayThree.name}</Text>
        <Text sx={{ ...weekText.days }}>{city.weekDays.dayFour.name}</Text>
        <Text sx={{ ...weekText.days }}>{city.weekDays.dayFive.name}</Text>
      </Box>
      <Box>
        <Text sx={{ ...weekText.temp, padding: "0px 0px 0px 20px" }}>
          {city.weekDays.dayOne.min} {city.weekDays.dayOne.max}
        </Text>
        <Text sx={{ ...weekText.temp }}>
          {city.weekDays.dayTwo.min} {city.weekDays.dayTwo.max}
        </Text>
        <Text sx={{ ...weekText.temp }}>
          {city.weekDays.dayThree.min} {city.weekDays.dayThree.max}
        </Text>
        <Text sx={{ ...weekText.temp }}>
          {city.weekDays.dayFour.min} {city.weekDays.dayFour.max}
        </Text>
        <Text sx={{ ...weekText.temp }}>
          {city.weekDays.dayFive.min} {city.weekDays.dayFive.max}
        </Text>
      </Box>
    </Box>
  );
}

export default DetailsCard;
