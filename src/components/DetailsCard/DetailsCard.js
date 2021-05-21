import { Box, Text } from "@theme-ui/components";
import Divider from "../Divider/Divider";
import useCity from "../../hooks/useCity";

function DetailsCard({ sx }) {
  const [city] = useCity();

  return (
    <Box
      sx={{
        ...sx,
        background: "whitesmoke",
        maxWidth: ["300px", "450px"],
        height: "300px",
      }}
    >
      {city ? (
        <Box sx={{ padding: "30px 45px" }}>
          <Text variant="bold" sx={{ fontSize: "2" }}>
            {city.name} - {city.country}
          </Text>
          <Box
            sx={{
              paddingTop: "20px",
              fontSize: "4",
            }}
          >
            <Text variant="bold">
              {city.temperature} {city.weather}
            </Text>
          </Box>
          <Box
            sx={{
              padding: "10px 0px",
            }}
          >
            <Text>Sensação</Text>
            <Text variant="bold" sx={{ paddingLeft: "8px" }}>
              {city.feelsLike}
            </Text>
          </Box>
          <Box
            sx={{
              padding: "10px 0px",
            }}
          >
            <Text>Vento</Text>
            <Text variant="bold" sx={{ paddingLeft: "7px" }}>
              {city.wind}
            </Text>
            <Text sx={{ padding: "0px 15px 0px 20px" }}>Umidade</Text>
            <Text variant="bold">{city.humidity}</Text>
          </Box>
          <Divider
            sx={{
              margin: "10px 0px 15px -23px",
              background: "orange",
              width: "110%",
            }}
          />
        </Box>
      ) : (
        "Loading"
      )}
    </Box>
  );
}

export default DetailsCard;
