import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
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
import MegaMenu from "./components/MegaMenu";
import { pathsActions } from "../../store/slice/pathsSlice";

const pages = ["Solutions", "Articles", "About Us", "Careers"];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const paths = useSelector((state) => state.paths);
  const dispatch = useDispatch();
  const [subMenu, setSubMenu] = useState([]);
  const [selectedSubMenu, setSelectedSubMenu] = useState(null);
  const [anchorElMenu, setAnchorElMenu] = useState(null);
  const openMenu = Boolean(anchorElMenu);

  const handleClickMenu = (event) => {
    setAnchorElMenu(event.currentTarget);
    const newSub = menu.filter((row) => {
      if (event.currentTarget.id === row.title.toLowerCase()) {
        return row;
      }
    });
    setSubMenu(newSub[0].sub_menu);
    setSelectedSubMenu(newSub[0].sub_menu[0]);
  };

  const handleOpenMenuHover = (event) => {
    event.preventDefault();
    setAnchorElMenu(event.currentTarget);
    const newSub = menu.filter((row) => {
      if (event.currentTarget.id === row.title.toLowerCase()) {
        return row;
      }
    });
    setSubMenu(newSub[0].sub_menu);
    setSelectedSubMenu(newSub[0].sub_menu[0]);
    // const whichButton = event.currentTarget.id;
    // if (whichButton === "marketplacebutton") {
    //   setAnchorEl(event.currentTarget);
    // } else if (whichButton === "statsbutton") {
    //   setAnchorEl1(event.currentTarget);
    // } else if (whichButton === "resourcesbutton") {
    //   setAnchorEl2(event.currentTarget);
    // } else if (whichButton === "profilebutton") {
    //   setAnchorEl3(event.currentTarget);
    // }
  };

  const handleMenuCloseHover = (e) => {
    if (e.currentTarget.id === "mega-menu") {
      const menu = document.getElementById("mega-menu");
      const menuBoundary = {
        left: menu.offsetLeft,
        top: menu.offsetTop - 60,
        right: menu.offsetLeft + menu.offsetWidth,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX > menuBoundary.left &&
        e.clientX < menuBoundary.right &&
        e.clientY < menuBoundary.bottom &&
        e.clientY > menuBoundary.top
      ) {
        return;
      } else {
        setAnchorElMenu(null);
      }
    }
    if (e.currentTarget.localName === "button") {
      const menu = document.getElementById(e.currentTarget.id);
      const menuBoundary = {
        left: menu.offsetLeft,
        top: menu.offsetTop,
        right: menu.offsetLeft + menu.offsetLeft + menu.offsetWidth,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        setAnchorElMenu(null);
        return;
      }
    }
    // setAnchorElMenu(null);
    // if (e.currentTarget.id !== "mega-menu-popover") {
    //   console.log("test");
    //   const menu = document.getElementById("marketplacedrop").children[2];
    //   const menuBoundary = {
    //     left: menu.offsetLeft,
    //     top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
    //     right: menu.offsetLeft + menu.offsetHeight,
    //     bottom: menu.offsetTop + menu.offsetHeight,
    //   };
    //   const menu1 = document.getElementById("statdrop").children[2];
    //   const menuBoundary1 = {
    //     left: menu1.offsetLeft,
    //     top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
    //     right: menu1.offsetLeft + menu1.offsetHeight,
    //     bottom: menu1.offsetTop + menu1.offsetHeight,
    //   };
    //   const menu2 = document.getElementById("resourcesdrop").children[2];
    //   const menuBoundary2 = {
    //     left: menu2.offsetLeft,
    //     top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
    //     right: menu2.offsetLeft + menu2.offsetHeight,
    //     bottom: menu2.offsetTop + menu2.offsetHeight,
    //   };
    //   if (currentSession !== null) {
    //     const menu3 = document.getElementById("profiledrop").children[2];
    //     const menuBoundary3 = {
    //       left: menu3.offsetLeft,
    //       top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
    //       right: menu3.offsetLeft + menu3.offsetHeight,
    //       bottom: menu3.offsetTop + menu3.offsetHeight,
    //     };
    //     if (
    //       e.clientX >= menuBoundary3.left &&
    //       e.clientX <= menuBoundary3.right &&
    //       e.clientY <= menuBoundary3.bottom &&
    //       e.clientY >= menuBoundary3.top
    //     ) {
    //       return;
    //     }
    //   }

    //   if (
    //     e.clientX >= menuBoundary.left &&
    //     e.clientX <= menuBoundary.right &&
    //     e.clientY <= menuBoundary.bottom &&
    //     e.clientY >= menuBoundary.top
    //   ) {
    //     return;
    //   } else if (
    //     e.clientX >= menuBoundary1.left &&
    //     e.clientX <= menuBoundary1.right &&
    //     e.clientY <= menuBoundary1.bottom &&
    //     e.clientY >= menuBoundary1.top
    //   ) {
    //     return;
    //   } else if (
    //     e.clientX >= menuBoundary2.left &&
    //     e.clientX <= menuBoundary2.right &&
    //     e.clientY <= menuBoundary2.bottom &&
    //     e.clientY >= menuBoundary2.top
    //   ) {
    //     return;
    //   }
    // }
    // setAnchorEl(null);
    // setAnchorEl1(null);
    // setAnchorEl2(null);
    // setAnchorEl3(null);
    // setAnchorElMenu(null);
  };

  const handleCloseMenu = (event) => {
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
    if (pathname !== "/" && pathname !== "/solutions") {
      setHeaderBg(true);
    }

    return () => {
      setHeaderBg(false);
    };
  }, [pathname]);

  useEffect(() => {
    dispatch(pathsActions.getPath());
  }, []);
  return (
    <AppBar
      position="static"
      className={`app-bar ${headerBg ? "active" : scrollPos > 200 && "active"}`}
    >
      <Container
        maxWidth="xl"
        sx={{ padding: "0 !important", position: "relative" }}
      >
        <Toolbar disableGutters sx={{ padding: "0 24px" }}>
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
                onMouseOver={(event) => {
                  page.link === "" && handleOpenMenuHover(event);
                }}
                onMouseLeave={handleMenuCloseHover}
                sx={{ my: 2, color: "white", display: "block", zIndex: 1301 }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

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
      {anchorElMenu !== null && (
        <MegaMenu
          // anchorElMenu={anchorElMenu}
          // openMenu={openMenu}
          handleCloseMenu={handleCloseMenu}
          selectedSubMenu={selectedSubMenu}
          subMenu={subMenu}
          subMenuHandler={subMenuHandler}
          handleMenuCloseHover={handleMenuCloseHover}
        />
      )}
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
