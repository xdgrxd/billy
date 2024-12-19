import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Input,
  Toolbar,
  useTheme,
} from "@mui/material";

import mainLogo from "../assets/mainLogo.svg";

import { ConfirmationNumber, Notifications } from "@mui/icons-material";

export const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          height={"70px"}
        >
          <Box display={"flex"}>
            <Box
              component={"img"}
              src={mainLogo}
              height={theme.spacing(5)}
            />
            <Input
              id="searchInput"
              disableUnderline
              sx={{
                marginLeft: theme.spacing(4.4),
                backgroundColor: "white",
                borderRadius: theme.spacing(1),
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2),
                width: "375px",
              }}
              placeholder="Search your best events, converts and more..."
            />
          </Box>

          <Toolbar>
            <Box
              display={"flex"}
              gap={theme.spacing(4)}
              marginRight={theme.spacing(4)}
            >
              <Button sx={{ color: "white" }}>EVENTOS</Button>
              <Button sx={{ color: "white" }}>FEED</Button>
              <Button sx={{ color: "white" }}>SEGUINDO</Button>
            </Box>
            <Button
              id="myTicketsBtn"
              variant="contained"
              startIcon={<ConfirmationNumber />}
              sx={{ marginRight: theme.spacing(1) }}
            >
              MY TICKETS
            </Button>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              // sx={{backgroundColor: theme.palette.primary}}
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>

            <IconButton>
              <Avatar></Avatar>
            </IconButton>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
};
