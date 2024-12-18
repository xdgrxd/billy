import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  useTheme,
} from "@mui/material";

import mainLogo from "../assets/mainLogo.svg";

import { useMemo, useState } from "react";
import {
  AccountCircle,
  ConfirmationNumber,
  Notifications,
  Search,
} from "@mui/icons-material";

export const Header: React.FC = () => {
  const theme = useTheme();

  const [notificationsBadgeNumber, setNotificationsBadgeNumber] = useState(1);

  const memoNotifications = useMemo(() => {
    return notificationsBadgeNumber;
  });

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
          <Box>
            <Box component={"img"} src={mainLogo} height={theme.spacing(5)} />

          </Box>

          <Toolbar>
            <Button
              id="myTicketsBtn"
              variant="contained"
              startIcon={<ConfirmationNumber />}
            >
              MY TICKETS
            </Button>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
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
