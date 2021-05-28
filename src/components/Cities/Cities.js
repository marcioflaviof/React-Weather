import { Box, Text } from "@theme-ui/components";
import useWeather from "../../hooks/useWeather";

const sx = {
  column: {
    columns: [null, null, "100px 2"],
    columnGap: "40px",
  },
  span: {
    title: {
      display: "inline-block",
      m: "0 5px",
    },

    city: {
      display: "inline-block",
      minWidth: "18px",
      m: "10px 10px",
    },
  },
};

const params = [
  { city: "Rio de Janeiro", country: "BR" },
  { city: "Sao Paulo", country: "BR" },
  { city: "Belo Horizonte", country: "BR" },
  { city: "Brasilia", country: "BR" },
  { city: "Porto Alegre", country: "BR" },
  { city: "Salvador", country: "BR" },
  { city: "Curitiba", country: "BR" },
  { city: "Fortaleza", country: "BR" },
  { city: "Manaus", country: "BR" },
  { city: "Joao Pessoa", country: "BR" },
];

function Cities() {
  const [cities] = useWeather(params);

  return (
    <Box
      sx={{
        marginLeft: ["2rem", "2rem", "7.5rem"],
        marginRight: ["2rem", "2rem", "7.5rem"],
      }}
    >
      <Text variant="title">Capitais</Text>

      <Box sx={{ ...sx.column, m: "10px 0" }}>
        <Box>
          <Text variant="small" sx={sx.span.title}>
            Temp
          </Text>
        </Box>
        <Box
          sx={{
            display: ["none", "none", "inline-block"],
          }}
        >
          <Text variant="small" sx={sx.span.title}>
            Temp
          </Text>
        </Box>
      </Box>
      <Box sx={sx.column}>
        {cities.length === 10 ? (
          cities.map((city, index) => (
            <Box key={index}>
              <Text variant="small" sx={sx.span.city}>
                {city.temperature}
              </Text>
              <Text variant="small" sx={sx.span.city}>
                {city.name}
              </Text>
            </Box>
          ))
        ) : (
          <Text sx={{ fontSize: "3", color: "#414141" }}>Data not found</Text>
        )}
      </Box>
    </Box>
  );
}

export default Cities;
