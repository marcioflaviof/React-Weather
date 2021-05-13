import { Box, Flex, Text } from "@theme-ui/components";

function Cities() {
  const cities = [
    "Rio de Janeiro",
    "São Paulo",
    "Belo Horizonte",
    "Brasília",
    "Belém",
  ];

  const citiesTwo = [
    "Salvador",
    "Curitiba",
    "Fortaleza",
    "Manaus",
    "João Pessoa",
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
          fontFamily: "body",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Capitais
      </Text>

      <Box sx={{ fontFamily: "body" }}>
        <Box
          sx={{
            display: ["inline", "inline", "flex"],
          }}
        >
          <Box sx={{ flex: 1 }}>
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

            {cities.map((citie) => {
              return (
                <Flex
                  sx={{
                    paddingLeft: "0.7rem",
                    p: {
                      paddingLeft: "0.5rem",
                      fontWeight: "bold",
                      fontSize: 1,
                    },
                  }}
                >
                  <Flex>
                    <p>{(Math.random() * (20 - 3) + 3).toFixed()}º</p>
                    <p>{(Math.random() * (40 - 20) + 20).toFixed()}º</p>
                  </Flex>
                  <Flex>
                    <p>{citie}</p>
                  </Flex>
                </Flex>
              );
            })}
          </Box>
          <Box>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: {
                  paddingLeft: "0.5rem",
                  color: "#8C6011",
                  fontSize: [0],
                  display: ["none", "none", "flex"],
                },
              }}
            >
              <p>Min</p>
              <p>Máx</p>
            </Flex>
            {citiesTwo.map((citie) => {
              return (
                <Flex
                  sx={{
                    paddingLeft: "0.7rem",
                    p: {
                      paddingLeft: "0.5rem",
                      fontWeight: "bold",
                      fontSize: 1,
                    },
                  }}
                >
                  <Flex>
                    <p>{(Math.random() * (20 - 3) + 3).toFixed()}º</p>
                    <p>{(Math.random() * (40 - 20) + 20).toFixed()}º</p>
                  </Flex>
                  <Flex>
                    <p>{citie}</p>
                  </Flex>
                </Flex>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cities;
