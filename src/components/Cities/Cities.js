import { Box, Text } from "@theme-ui/components";

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

function Cities() {
  const cities = [
    { name: "Rio de Janeiro", min: "17º", max: "23º" },
    { name: "São Paulo", min: "14º", max: "22º" },
    { name: "Belo Horizonte", min: "21º", max: "32º" },
    { name: "Brasília", min: "24º", max: "37º" },
    { name: "Belém", min: "24º", max: "37º" },
    { name: "Salvador", min: "23º", max: "37º" },
    { name: "Curitiba", min: "5º", max: "14º" },
    { name: "Fortaleza", min: "21º", max: "32º" },
    { name: "Manaus", min: "24º", max: "37º" },
    { name: "João Pessoa", min: "28º", max: "40º" },
  ];

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
            Min
          </Text>
          <Text variant="small" sx={sx.span.title}>
            Máx
          </Text>
        </Box>
        <Box
          sx={{
            display: ["none", "none", "inline-block"],
          }}
        >
          <Text variant="small" sx={sx.span.title}>
            Min
          </Text>
          <Text variant="small" sx={sx.span.title}>
            Máx
          </Text>
        </Box>
      </Box>
      <Box sx={sx.column}>
        {cities.map((city, index) => (
          <Box key={index}>
            <Text variant="small" sx={sx.span.city}>
              {city.min}
            </Text>
            <Text variant="small" sx={sx.span.city}>
              {city.max}
            </Text>
            <Text variant="small" sx={sx.span.city}>
              {city.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Cities;
