import React from "react";
import {
  Container,
  Stack,
  AppBar,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
function App() {
  return (
    <Container maxWidth="xl">
      <AppBar position="static">
        <Stack
          display="flex"
          flexDirection="horizontal"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Let'sTalk🤠
            </Typography>
          </Box>

          <Box>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box>
        </Stack>
      </AppBar>
    </Container>
  );
}

export default App;
