import { Box, Container, Paper, Typography, useTheme } from "@mui/material";

export const BuyPage = () => {
  const theme = useTheme();
  const spacing = theme.spacing;

  return (
    <>
      <Container sx={{padding: "2rem"}}>
        <Box display="flex" id="mainBox" gap={spacing(4)}>
          <Box flexGrow="3">
            <Paper sx={{ padding: "2rem" }}>content 1</Paper>
          </Box>
          <Box flexGrow="1">
            <Paper sx={{ padding: "2rem" }}>content 1</Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
};
