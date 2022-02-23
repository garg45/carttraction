import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./css/Home.css";
import logo1 from "../images/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["Home", "About Us", "Contact Us", "Hi,user", "View Cart"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    //#abd4f5
    <AppBar style={{ background: "white" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img style={{ height: "100px" }} src={logo1} />
          <Typography
            variant="h3"
            //noWrap
            //component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "black" }}
          >
            <strong>
              <i>CARTTRACTION</i>
            </strong>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                <div class="icon">
                  <i class="fa fa-home" aria-hidden="true"></i>
                  <i class="fa fa-home" aria-hidden="true"></i>
                </div>
                <div class="name">
                  <span data-text="Home">Home</span>
                </div>
              </Button>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                About Us
              </Button>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                Contact Us
              </Button>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                Hi,user
              </Button>
              <Button href="#" sx={{ my: 2, color: "Black", display: "block" }}>
                View Cart
              </Button>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "black",
            }}
          >
            CARTTRACTION
          </Typography>
          <Box
            className="boxClass"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              className="buttonClass"
              href="#"
              sx={{ mx: 3, my: 2, color: "Black", display: "block" }}
            >
              <div style={{ fontSize: "20px" }}>
                <b>Home</b>
              </div>
            </Button>
            <Button
              className="buttonClass"
              href="#"
              sx={{ mx: 3, my: 2, color: "Black", display: "block" }}
            >
              <div style={{ fontSize: "20px" }}>
                <b>About Us</b>
              </div>
            </Button>
            <Button
              className="buttonClass"
              href="#"
              sx={{ mx: 3, my: 2, color: "Black", display: "block" }}
            >
              <div style={{ fontSize: "20px" }}>
                <b>Contact Us</b>
              </div>
            </Button>
            <Button
              className="buttonClass"
              href="#"
              sx={{ mx: 3, my: 2, color: "Black", display: "block" }}
            >
              <div style={{ fontSize: "20px" }}>
                <b>Hi,user</b>
              </div>
            </Button>
            <Button
              className="buttonClass"
              href="#"
              sx={{ my: 2, color: "Black", display: "block" }}
            >
              <ShoppingCartIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
