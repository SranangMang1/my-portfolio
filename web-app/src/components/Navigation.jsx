import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SubjectIcon from "@mui/icons-material/Subject";

export default function Navigation() {
  return (
    <Box sx={{ flexGrow: 3 }}>
      <AppBar
        sx={{ bgcolor: { xs: "#0bddeb", sm: "#8851f7" }, flexGrow: 1 }}
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rodney Wong
          </Typography>
          <IconButton
            href="https://www.linkedin.com/in/rodneywong16/"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            edge="start"
            color="inherit"
            aria-label="LinkedIn"
            sx={{ mr: 2 }}
          >
            <LinkedInIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Linkedin
            </Typography>
          </IconButton>
          <IconButton
            href="https://github.com/SranangMang1"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
            edge="start"
            color="inherit"
            aria-label="github"
            sx={{ mr: 2 }}
          >
            <GitHubIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GitHub
            </Typography>
          </IconButton>
          <IconButton
            href=""
            size="large"
            edge="start"
            color="inherit"
            aria-label="resume"
            sx={{ mr: 2 }}
          >
            <SubjectIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RESUME
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
