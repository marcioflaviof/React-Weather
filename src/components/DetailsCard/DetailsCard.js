import { Box, Text } from "@theme-ui/components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import useCity from "../../hooks/useCity";

const weekText = {
  days: {
    marginLeft: "30px",
    fontWeight: "bold",
  },

  temp: {
    marginLeft: "25px",
    fontWeight: "bold",
    color: "orange",
  },
};

function DetailsCard({ sx }) {
  const [details] = useCity();

  return (
    <Box
      sx={{
        ...sx,
        background: "whitesmoke",
        maxWidth: ["300px", "450px"],
        height: "300px",
      }}
    >
      {details ? (
        <Box sx={{ padding: "10px 0px 0px 45px" }}>
          <Box
            sx={{
              padding: "20px 0px",
              fontSize: "2",
            }}
          >
            <Text variant="bold">
              {details.name}, {details.state} - {details.country}
            </Text>
          </Box>
          <Box
            sx={{
              fontSize: "6",
            }}
          >
            <Text variant="bold">
              {details.temp} {details.weather}
            </Text>
          </Box>
          <Box
            sx={{
              margin: "0px 0px 0px -5px",
              padding: "10px 0px",
            }}
          >
            <BsArrowDown color={"orange"} />
            <Text variant="bold">{details.min_temp}</Text>

            <BsArrowUp color={"orange"} />
            <Text variant="bold">{details.max_temp}</Text>
            <Text sx={{ padding: "0px 50px" }}>
              Sensação <strong>{details.sensation}</strong>
            </Text>
          </Box>
          <Box
            sx={{
              padding: "10px 0px",
            }}
          >
            <Text>
              Vento <strong>{details.wind} </strong>
            </Text>
            <Text sx={{ padding: "0px 20px" }}>
              Umidade <strong> {details.humidity} </strong>
            </Text>
          </Box>
          <Box
            sx={{
              margin: "10px 0px 15px -23px",
              background: "orange",
              opacity: "70%",
              height: "2px",
              width: "100%",
            }}
          />
          <Box>
            <Text variant="bold">{details.weekDays.dayOne.name}</Text>
            <Text sx={{ ...weekText.days }}>
              {details.weekDays.dayTwo.name}
            </Text>
            <Text sx={{ ...weekText.days }}>
              {details.weekDays.dayThree.name}
            </Text>
            <Text sx={{ ...weekText.days }}>
              {details.weekDays.dayFour.name}
            </Text>
            <Text sx={{ ...weekText.days }}>
              {details.weekDays.dayFive.name}
            </Text>
          </Box>
          <Box>
            <Text variant="bold" sx={{ color: "orange" }}>
              {details.weekDays.dayOne.min} {details.weekDays.dayOne.max}
            </Text>
            <Text sx={{ ...weekText.temp }}>
              {details.weekDays.dayTwo.min} {details.weekDays.dayTwo.max}
            </Text>
            <Text sx={{ ...weekText.temp }}>
              {details.weekDays.dayThree.min} {details.weekDays.dayThree.max}
            </Text>
            <Text sx={{ ...weekText.temp }}>
              {details.weekDays.dayFour.min} {details.weekDays.dayFour.max}
            </Text>
            <Text sx={{ ...weekText.temp }}>
              {details.weekDays.dayFive.min} {details.weekDays.dayFive.max}
            </Text>
          </Box>
        </Box>
      ) : (
        "Loading"
      )}
    </Box>
  );
}

export default DetailsCard;
