import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { menu } from "../../utils/menu";
import CustomModal from "../common/CustomModal";

const pages = ["Solutions", "Articles", "About Us", "Careers"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [subMenu, setSubMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openMenu = Boolean(anchorElMenu);
  const handleClickMenu = (event) => {
    console.log(event.currentTarget.id);
    setAnchorElMenu(event.currentTarget);
    const newSub = menu.filter((row) => {
      if (event.currentTarget.id === row.title.toLowerCase()) {
        return row;
      }
    });
    setSubMenu(newSub[0].sub_menu);
    setSelectedSubMenu(newSub[0].sub_menu[0]);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { pathname, push } = useRouter();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrollPos, setScrollPos] = useState("0");
  const [headerBg, setHeaderBg] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const subMenuHandler = (submenu) => {
    setSelectedSubMenu(submenu);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const linkTo = (id) => {
    push(id);
    handleClose();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const scrollListenerHandler = () => {
    const pos = window.scrollY;
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListenerHandler);

    return () => {
      window.removeEventListener("scroll", scrollListenerHandler);
    };
  });

  useEffect(() => {
    if (pathname !== "/") {
      setHeaderBg(true);
    }

    return () => {
      setHeaderBg(false);
    };
  }, [pathname]);

  return (
    <AppBar
      position="static"
      className={`app-bar ${headerBg ? "active" : scrollPos > 200 && "active"}`}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            onClick={() => push("/")}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <MenuIcon />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => linkTo(page.toLowerCase())}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menu.map((page, index) => (
              <Button
                key={index}
                id={page.title.toLowerCase()}
                onClick={(event) => {
                  page.link === "" ? handleClickMenu(event) : linkTo(page.link);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Menu
            id="basic-menu"
            anchorEl={anchorElMenu}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PopoverClasses={{ paper: "mega-menu" }}
          >
            <Box sx={{ display: "flex" }}>
              <Box sx={{ width: "25%", padding: "0 24px" }}>
                {subMenu.map((row, index) => {
                  return (
                    <MenuItem
                      sx={{
                        overflowWrap: "break-word",
                        wordBreak: "break-word",
                        whiteSpace: "unset",
                      }}
                      key={index}
                      onClick={() => subMenuHandler(row)}
                    >
                      {row.title}
                    </MenuItem>
                  );
                })}
              </Box>
              <Box sx={{ display: "flex", width: "60%" }}>
                {selectedSubMenu !== null && (
                  <>
                    <Box sx={{ width: "60%" }}>
                      <Typography
                        sx={{ marginBottom: "32px" }}
                        component="h1"
                        variant="h5"
                      >
                        {selectedSubMenu.title}
                      </Typography>
                      <Typography>{selectedSubMenu.description}</Typography>
                    </Box>
                    <Box sx={{ width: "40%", padding: "0 24px" }}>
                      <Typography
                        sx={{ fontWeight: 600, marginBottom: "32px" }}
                      >
                        Goals
                      </Typography>
                      <Typography>{selectedSubMenu.goal}</Typography>
                    </Box>
                  </>
                )}
              </Box>
            </Box>
          </Menu>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                className="app-bar__btn"
                onClick={() => push("/get-in-touch")}
              >
                Get in Touch
              </Button>
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <CustomModal open={open} handleClose={handleClose}>
        <Box>
          {pages.map((page) => (
            <MenuItem key={page} onClick={() => linkTo(page.toLowerCase())}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Box>
      </CustomModal>
    </AppBar>
  );
};
export default Header;
