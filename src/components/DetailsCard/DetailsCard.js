import { Box, Text } from "@theme-ui/components";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import useCity from "../../hooks/useCity";

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
        <Box>
          <Box
            sx={{
              padding: "20px",
              marginLeft: "20px",
              fontSize: "2",
              fontWeight: "bold",
            }}
          >
            <Text>
              {details.name}, {details.state} - {details.country}
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
              {details.temp} {details.weather}
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
              {details.min_temp}
            </Text>

            <BsArrowUp color={"#F98E01"} />
            <Text
              sx={{
                fontWeight: "bold",
              }}
            >
              {details.max_temp}
            </Text>
            <Text
              sx={{
                marginLeft: "30px",
              }}
            >
              Sensação <strong>{details.sensation}</strong>
            </Text>
          </Box>
          <Box
            sx={{
              padding: "10px",
              marginLeft: "30px",
            }}
          >
            <Text>
              Vento <strong>{details.wind} </strong>
            </Text>
            <Text
              sx={{
                marginLeft: "25px",
              }}
            >
              Umidade <strong> {details.humidity} </strong>
            </Text>
          </Box>
          <Box
            sx={{
              margin: "10px 23px 10px",
              background: "#F98E01",
              opacity: "70%",
              height: "2px",
              width: "90%",
            }}
          />
          <Box>
            <Text sx={{ ...weekText.days, padding: "0px 0px 0px 15px" }}>
              {details.weekDays.dayOne.name}
            </Text>
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
            <Text sx={{ ...weekText.temp, padding: "0px 0px 0px 20px" }}>
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
