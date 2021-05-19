import { Box } from "@theme-ui/components";
function Divider({ sx }) {
  return (
    <Box
      sx={{
        opacity: "70%",
        height: "2px",
        width: "100%",
        background: "white",
        ...sx,
      }}
    />
  );
}

export default Divider;
