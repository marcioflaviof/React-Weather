import { Box, Flex, Text } from "@theme-ui/components";

function Cities() {
  const citiesObject = [
    { name: "Rio de Janeiro", min: "17", max: "23" },
    { name: "São Paulo", min: "14", max: "22" },
    { name: "Belo Horizonte", min: "21", max: "32" },
    { name: "Brasília", min: "24", max: "37" },
    { name: "Belém", min: "24", max: "37" },
    { name: "Salvador", min: "23", max: "37" },
    { name: "Curitiba", min: "5", max: "14" },
    { name: "Fortaleza", min: "21", max: "32" },
    { name: "Manaus", min: "24", max: "37" },
    { name: "João Pessoa", min: "28", max: "40" },
  ];

  return (
    <Box
      sx={{
        marginLeft: ["2rem", "2rem", "8.5rem"],
        marginRight: ["2rem", "2rem", "8.5rem"],
      }}
    >
      <Text
        sx={{
          fontSize: [4, 4, 5],
          fontWeight: "bold",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Capitais
      </Text>
      <Box>
        <Box
          sx={{
            display: ["inline", "inline", "flex"],
          }}
        >
          <Box>
            <Flex>
              <Flex
                sx={{
                  paddingLeft: "0.7rem",
                  p: {
                    paddingLeft: "0.5rem",
                    color: "#8C6011",
                    fontSize: 0,
                  },
                }}
              >
                <p>Min</p>
                <p>Máx</p>
              </Flex>
              <Box
                sx={{
                  marginLeft: "9.1rem",
                  paddingLeft: "0.7rem",
                  display: ["none", "none", "flex"],
                  p: {
                    paddingLeft: "0.5rem",
                    color: "#8C6011",
                    fontSize: 0,
                  },
                }}
              >
                <p>Min</p>
                <p>Máx</p>
              </Box>
            </Flex>
            <Box sx={{ columns: [null, null, "100px 2"], columnGap: "40px" }}>
              {citiesObject.map((citie, index) => {
                return (
                  <Flex
                    key={index}
                    sx={{
                      paddingLeft: "0.7rem",
                      p: {
                        paddingLeft: "0.5rem",
                        fontWeight: "bold",
                        fontSize: 1,
                      },
                    }}
                  >
                    <p>{citie.min}º</p>
                    <p>{citie.max}º</p>
                    <p>{citie.name}</p>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cities;
