import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  FORGOTPASSWORD_ROUTE,
  MYPROFILE_ROUTE,
  SETTINGS_ROUTE,
  ALLREQUESTS_ROUTE,
  MYREQUESTS_ROUTE,
  CREATEREQUESTS_ROUTE,
} from "../constantes/ConstantRoute";
import { useNavigate } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import useWindowDimensions from "./WindowResize";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import TaskIcon from "@mui/icons-material/Task";
import AddIcon from "@mui/icons-material/Add";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const { width } = useWindowDimensions();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const IconsLeftBar = [
    <AccountCircleIcon />,
    <SettingsIcon />,
    <LogoutIcon />,
    <QuestionAnswerIcon />,
    <TaskIcon />,
    <AddIcon />,
  ];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ backgroundColor: "#2cccc9" }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-beetwen",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                onClick={() => navigate(HOME_ROUTE)}
                style={{ cursor: "pointer", fontSize: "16px" }}
                variant="h6"
                noWrap
                component="div"
              >
                AIR FORUM
              </Typography>
            </div>
            <div
              style={{ display: open ? "none" : "flex", alignItems: "center" }}
            >
              <Link
                style={{
                  paddingRight: "13px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "Verdana",
                }}
                to={ABOUT_ROUTE}
              >
                ABOUT
              </Link>
              <Link
                style={{
                  paddingRight: "13px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to={CONTACTS_ROUTE}
              >
                CONTACT-US
              </Link>
              <Link
                style={{
                  paddingRight: "13px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to={SIGNIN_ROUTE}
              >
                SIGN-IN /
              </Link>
              <Link
                style={{
                  marginLeft: "-10px",
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "16px",
                }}
                to={SIGNUP_ROUTE}
              >
                UP
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{ backgroundColor: "#2cccc9" }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List style={{ backgroundColor: "#2cccc9" }}>
          {[
            ["My Profile", MYPROFILE_ROUTE],
            ["Settings", SETTINGS_ROUTE],
            ["Log Out", SIGNIN_ROUTE],
          ].map((text, index) => (
            <ListItem
              key={text[0]}
              onClick={() => {
                navigate(text[1]);
                setOpen(false);
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{IconsLeftBar[index]}</ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List style={{ backgroundColor: "#2cccc9" }}>
          {[
            ["All Requests", ALLREQUESTS_ROUTE],
            ["My Requests", MYREQUESTS_ROUTE],
            ["Create Requests", CREATEREQUESTS_ROUTE],
          ].map((text, index) => (
            <ListItem
              key={text[0]}
              onClick={() => {
                navigate(text[1]);
                setOpen(false);
              }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{IconsLeftBar[index + 3]}</ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <div style={{ backgroundColor: "#2cccc9", height: "100vh" }}></div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
