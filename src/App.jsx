import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Routes, Route, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./App.css";
import { Drawer, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import icon from "./logoimg/icon.png";
import { API } from "./API";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { HomePage } from "./HomePage";
import { MenuOpen } from "@mui/icons-material";
import { BuildingPage } from "./BuildingPage";
import { RentPage } from "./RentPage";
import { LandPage } from "./LandPage";
import { AllProperties } from "./ALLPROPERTIES.JSX";
import ContactPage from "./ContactPage";
import NotFoundPage from "./NotFound";
function App() {
  const [navbarlist, setnavbar] = useState([
    { nav: "Home", routlink: "/Home" },
    { nav: "Properties", routlink: "" },
    { nav: "Contact", routlink: "/Contact" },
  ]);
  const navigate = useNavigate();
  const Propertielist = ["All", "Rent", "Buildings"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const [Menuopen, setMenuopen] = useState(true);
  const isMdScreen = useMediaQuery(theme.breakpoints.up("md")); // Detect if screen size is md or smaller
  // Handle opening and closing the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen); // Toggle drawer state
    console.log(isDrawerOpen, "from prev");
  };

  // Close drawer on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (isMdScreen) {
        setDrawerOpen(false); // Close the drawer if the screen size exceeds the breakpoint
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMdScreen]);
  console.log(isMdScreen, "show");

  const temp = (
    <div>
      {Menuopen ? ( // Use Menuopen directly, no quotes
        <List>
          {Propertielist?.map((ele, index) => (
            <ListItem
              onClick={() => {
                navigate(`/${ele}`);
                setDrawerOpen(false);
              }}
              key={index}
            >
              <ListItemButton>
                <ListItemIcon>
                  <ListItemText sx={{ color: "white" }}>{ele}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
    </div>
  );

  return (
    <>
      <header>
        <AppBar
          sx={{
            backgroundColor: "#091D35",
            // borderBottom: "5px solid red",
          }}
        >
          <Toolbar sx={{ marginRight: "0px" }}>
            <Box>
              <Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
                <img
                  src="https://raw.githubusercontent.com/zyedibrahim/Real-Estate-Web/refs/heads/main/src/logoimg/icon.png"
                  alt="Logo"
                  style={{
                    width: "min-content",
                    height: "30px",
                    objectFit: "cover",
                    position: "relative",
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "280px", // Half the width
                  borderBottom: "5px solid #F96F6C",
                }}
              />
            </Box>
            {isMdScreen ? (
              <Box sx={{ marginLeft: "auto" }}>
                {navbarlist?.map((ele) => (
                  <Button
                    sx={{
                      fontFamily: '"Roboto Condensed", sans-serif',
                      fontWeight: 300,
                    }}
                    variant="contined"
                    key={ele.nav}
                    onClick={(e) => {
                      if (ele.nav === "Properties") {
                        // Toggle the menu open/close based on whether it's already open
                        anchorEl ? handleMenuClose() : handleMenuOpen(e);
                      } else {
                        handleMenuClose(); // Ensure the menu closes for other items
                        navigate(ele.routlink); // Navigate for non-Properties items
                      }
                    }}
                  >
                    {ele.nav}
                  </Button>
                ))}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "#091D35",
                      color: "white",
                      width: "120px",
                    },
                  }}
                >
                  {Propertielist.map((prop) => (
                    <MenuItem
                      onClick={() => {
                        navigate(`/${prop}`); // Navigate to the desired path
                        handleMenuClose(); // Close the menu
                      }}
                      key={prop}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontFamily: '"Roboto Condensed", sans-serif',
                          fontWeight: 300,
                        }}
                      >
                        {prop}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <MenuIcon
                // onClick={() => setDrawerOpen(!isDrawerOpen)}
                sx={{ marginLeft: "auto" }}
                onClick={handleDrawerToggle}
              />
            )}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#091D35", // Custom background color for the drawer
            },
          }}
        >
          <Box
            sx={{
              width: "250px", // Set the width of the Drawer here
            }}
          >
            <Box>
              <Box
                sx={{ width: "240px", height: "50px", objectFit: "contain" }}
                component="img"
                src="https://raw.githubusercontent.com/zyedibrahim/Real-Estate-Web/refs/heads/main/src/logoimg/icon.png"
                alt="logo"
              />
            </Box>
            <Divider />
            <List>
              {navbarlist.map((ele, index) => (
                <ListItem
                  sx={{ marginBottom: "20px", marginTop: "20px" }}
                  key={index}
                  disablePadding
                  onClick={ele.nav === "Properties" ? handleMenuOpen : null}
                >
                  <ListItemButton>
                    <ListItemText
                      sx={{
                        color: "white",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontWeight: 300,
                        letterSpacing: "2px",
                      }}
                    >
                      {ele.nav}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>{" "}
        </Drawer>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: "#091D35", // Custom background color for the drawer
            },
          }}
        >
          <Box
            sx={{
              width: "270px", // Set the width of the Drawer here
            }}
          >
            <Box
              onClick={() => {
                navigate("/Home");
                setDrawerOpen(false);
              }}
              sx={{ textAlign: "center", cursor: "pointer" }}
            >
              <Box
                sx={{
                  width: "240px",
                  height: "50px",
                  objectFit: "contain",

                  paddingX: "5px",
                }}
                component="img"
                src={icon}
                alt="logo"
              />
            </Box>
            <Divider sx={{ backgroundColor: "#F96F6C", height: "2px" }} />
            <List>
              {navbarlist?.map((ele, index) => (
                <ListItem
                  sx={{ marginBottom: "20px", marginTop: "20px" }}
                  key={index}
                  disablePadding
                  onClick={() => {
                    if (ele.nav !== "Properties") {
                      navigate(ele?.routlink);
                      setDrawerOpen(false); // Close the drawer after navigating
                    }
                  }}
                >
                  <ListItemButton>
                    <ListItemText
                      sx={{
                        color: "white",
                        fontFamily: '"Roboto Condensed", sans-serif',
                        fontWeight: 300,
                        letterSpacing: "2px",
                      }}
                      onClick={() => {
                        if (ele.nav === "Properties") {
                          setMenuopen((prev) => !prev); // Toggle the menu open state for "Properties"
                        } else {
                          setMenuopen(false); // Close the menu for other options
                          navigate(ele.routlink); // Navigate if it's not "Properties"
                        }
                      }}
                    >
                      {ele.nav}
                      {ele.nav === "Properties" ? temp : null}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>{" "}
        </Drawer>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Buildings" element={<BuildingPage />} />
          <Route path="/Rent" element={<RentPage />} />
          <Route path="/Land" element={<LandPage />} />
          <Route path="/All" element={<AllProperties />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer>
        <Box
          component="footer"
          sx={{
            backgroundColor: "#091D35",
            color: "#fff",
            paddingY: "70px",
            marginTop: "auto", // Ensure footer is at the bottom
          }}
        >
          <Grid
            container
            display="flex"
            flexDirection="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={4}>
              <Typography
                variant="body1"
                align="center"
                sx={{ marginBottom: 1 }}
              >
                DWELL Properties
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="body1"
                align="center"
                sx={{ marginBottom: 1 }}
              >
                All Rights Reserved © {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
}

export default App;
