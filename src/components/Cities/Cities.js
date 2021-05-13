import { Box, Text } from "@theme-ui/components";

function Cities() {
  return (
    <Box
      sx={{
        marginLeft: "7rem",
        marginRight: "7rem",
        "@media (max-width: 38em)": {
          marginLeft: "2rem",
          marginRight: "2rem",
        },
      }}
    >
      <Text
        sx={{
          fontSize: 3,
          fontWeight: "bold",
          fontFamily: "Roboto",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        Capitais
      </Text>

      <Box sx={{ fontFamily: "Roboto" }}>
        <Box
          sx={{
            display: "flex",
            "@media (max-width: 38em)": {
              display: "inline",
            },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                display: "flex",
                p: {
                  paddingLeft: "1rem",
                  color: "#8C6011",
                  fontSize: [0],
                },
              }}
            >
              <p>Min</p>
              <p>Máx</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { paddingLeft: "1.25rem", fontWeight: "bold" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>18º</p>
                <p>27º</p>
              </Box>
              <Box sx={{ display: "flex" }}>
                <p>Rio de Janeiro</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>14º</p>
                <p>22º</p>
              </Box>
              <Box>
                <p>São Paulo</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>21º</p>
                <p>32º</p>
              </Box>
              <Box>
                <p>Belo Horizonte</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>24º</p>
                <p>37º</p>
              </Box>
              <Box>
                <p>Brasília</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>24º</p>
                <p>37º</p>
              </Box>
              <Box>
                <p>Belém</p>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                p: {
                  paddingLeft: "1rem",
                  color: "#8C6011",
                  fontSize: [0],
                },
                "@media (max-width: 38em)": {
                  display: "none",
                },
              }}
            >
              <p>Min</p>
              <p>Máx</p>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>18º</p>
                <p>27º</p>
              </Box>
              <Box>
                <p>Rio de Janeiro</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>14º</p>
                <p>22º</p>
              </Box>
              <Box>
                <p>São Paulo</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>21º</p>
                <p>32º</p>
              </Box>
              <Box>
                <p>Belo Horizonte</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>24º</p>
                <p>37º</p>
              </Box>
              <Box>
                <p>Brasília</p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: { fontWeight: "bold", paddingLeft: "1.25rem" },
              }}
            >
              <Box sx={{ display: "flex" }}>
                <p>24º</p>
                <p>37º</p>
              </Box>
              <Box>
                <p>Belém</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Cities;
