import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import logo1 from "../images/logo4.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <>
      <Box className='footer'sx={{ width: "100%", background: "#11172e", bottom: "0" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <img style={{ height: "200px" }} src={logo1} />
          </Grid>
          <Grid style={{ color: "grey" }} item xs={2}>
            <b>About</b>
            <br />
            <br />

            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Home
            </a>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              About Us
            </a>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Contact Us
            </a>
          </Grid>
          <Grid style={{ color: "grey", textDecoration: "none" }} item xs={2}>
            <b>Help</b>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              FAQ
            </a>
            <p style={{ color: "#59a9eb" }}>
              <strong>Toll Free No.:</strong>
              <br /> +91 987 654 3210
            </p>
          </Grid>
          <Grid style={{ color: "grey" }} item xs={2}>
            <b>Social</b>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Facebook
            </a>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Twitter
            </a>
            <br />
            <br />
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Instagram
            </a>
          </Grid>
          <Grid item xs={3}>
            <p style={{ color: "white" }}>
              <strong style={{ color: "grey" }}>ADDRESS:</strong> 28 White
              tower, Street Name New York City, USA
            </p>
            <p style={{ color: "#59a9eb" }}>
              <strong style={{ color: "grey" }}>TELEPHONE:</strong> +91 987 654
              3210
            </p>
            <p style={{ color: "white" }}>
              <strong style={{ color: "grey" }}>EMAIL:</strong>{" "}
              yourmain@gmail.com
            </p>
          </Grid>
          <Grid item xs={12}>
            <p style={{ textAlign: "center", color: "#59a9eb" }}>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a style={{ color: "white", textDecoration: "none" }} href="#">
                {" "}
                Carttraction.com *Link*{" "}
              </a>
            </p>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
