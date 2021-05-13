import { Box, Flex, Text } from "@theme-ui/components";

function Cities() {
  return (
    <Box
      sx={{
        marginLeft: ["2rem", "8.5rem"],
        marginRight: ["2rem", "8.5rem"],
      }}
    >
      <Text
        sx={{
          fontSize: [4, 5],
          fontWeight: "bold",
          fontFamily: "body",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Capitais
      </Text>

      <Box sx={{ fontFamily: "body" }}>
        <Flex
          sx={{
            "@media (max-width: 38em)": {
              display: "inline",
            },
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
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>18º</p>
                <p>27º</p>
              </Flex>
              <Flex>
                <p>Rio de Janeiro</p>
              </Flex>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>14º</p>
                <p>22º</p>
              </Flex>
              <Box>
                <p>São Paulo</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>21º</p>
                <p>32º</p>
              </Flex>
              <Box>
                <p>Belo Horizonte</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>24º</p>
                <p>37º</p>
              </Flex>
              <Box>
                <p>Brasília</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>24º</p>
                <p>37º</p>
              </Flex>
              <Box>
                <p>Belém</p>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: {
                  paddingLeft: "0.5rem",
                  color: "#8C6011",
                  fontSize: [0],
                  display: ["none", "flex"],
                },
              }}
            >
              <p>Min</p>
              <p>Máx</p>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: 1 },
              }}
            >
              <Flex>
                <p>18º</p>
                <p>27º</p>
              </Flex>
              <Box>
                <p>Rio de Janeiro</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: [1] },
              }}
            >
              <Flex>
                <p>14º</p>
                <p>22º</p>
              </Flex>
              <Box>
                <p>São Paulo</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: [1] },
              }}
            >
              <Flex>
                <p>21º</p>
                <p>32º</p>
              </Flex>
              <Box>
                <p>Belo Horizonte</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: [1] },
              }}
            >
              <Flex>
                <p>24º</p>
                <p>37º</p>
              </Flex>
              <Box>
                <p>Brasília</p>
              </Box>
            </Flex>
            <Flex
              sx={{
                paddingLeft: "0.7rem",
                p: { paddingLeft: "0.5rem", fontWeight: "bold", fontSize: [1] },
              }}
            >
              <Flex>
                <p>24º</p>
                <p>37º</p>
              </Flex>
              <Box>
                <p>Belém</p>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Cities;
