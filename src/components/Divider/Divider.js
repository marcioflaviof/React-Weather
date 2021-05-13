import { Box } from "@theme-ui/components";
function Divider() {
  return (
    <Box
      sx={{
        background: "white",
        opacity: "30%",
        height: "0.2rem",
        margin: "auto",
        marginTop: "4rem",
        width: "80%",
        marginBottom: "1rem",
        "@media (max-width: 38em)": {
          width: "100%",
        },
      }}
      className="divider"
    />
  );
}

export default Divider;
