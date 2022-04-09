import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button, MenuItem, Menu, Typography, Box } from "@mui/material";

const MegaMenu = ({
  anchorElMenu,
  openMenu,
  handleCloseMenu,
  selectedSubMenu,
  subMenu,
  subMenuHandler,
  handleMenuCloseHover,
}) => {
  const [branch, setBranch] = useState([]);
  const { push } = useRouter();
  const linkTo = (link) => {
    push(link);
  };
  useEffect(() => {
    const branchHandler = () => {
      const newMap = subMenu.filter((row) => {
        if (row.title === selectedSubMenu.title) {
          if (row.branch !== undefined) {
            setBranch(row.branch);
          } else {
            setBranch([]);
          }
        }
      });
    };
    if (selectedSubMenu !== null) {
      branchHandler();
    }
  }, [selectedSubMenu]);
  return (
    <Box
      id="mega-menu"
      onMouseLeave={handleMenuCloseHover}
      className="mega-menu"
      // anchorEl={anchorElMenu}
      // keepMounted
      // open={openMenu}
      // onClose={(event) => handleCloseMenu(event)}
      // MenuListProps={{
      //   "aria-labelledby": "basic-button",
      // }}
      // PopoverClasses={{ paper: "mega-menu" }}
      // PaperProps={{
      //   onMouseLeave: handleMenuCloseHover,
      //   id: "mega-menu-popover",
      // }}
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
                onClick={() => {
                  subMenuHandler(row);
                  linkTo(row.link);
                }}
                onMouseOver={() => subMenuHandler(row)}
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
                <Box sx={{ marginBottom: "32px" }}>
                  <Typography
                    sx={{ marginBottom: "32px" }}
                    component="h1"
                    variant="h5"
                  >
                    {selectedSubMenu.title}
                  </Typography>
                  <Typography>{selectedSubMenu.description}</Typography>
                </Box>
                {branch.length > 0 && (
                  <Box>
                    {branch.map((row, index) => {
                      return (
                        <Box key={index}>
                          <Button onClick={() => linkTo(row.link)}>
                            {row.title}
                          </Button>
                        </Box>
                      );
                    })}
                  </Box>
                )}
              </Box>
              {selectedSubMenu.goal !== undefined && (
                <Box sx={{ width: "40%", padding: "0 24px" }}>
                  <Typography sx={{ fontWeight: 600, marginBottom: "32px" }}>
                    Goals
                  </Typography>
                  <Typography>{selectedSubMenu.goal}</Typography>
                </Box>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
    // <Menu
    //   id="mega-menu"
    //   anchorEl={anchorElMenu}
    //   keepMounted
    //   open={openMenu}
    //   onClose={(event) => handleCloseMenu(event)}
    //   MenuListProps={{
    //     "aria-labelledby": "basic-button",
    //   }}
    //   PopoverClasses={{ paper: "mega-menu" }}
    //   PaperProps={{
    //     onMouseLeave: handleMenuCloseHover,
    //     id: "mega-menu-popover",
    //   }}
    // >
    //   <Box sx={{ display: "flex" }}>
    //     <Box sx={{ width: "25%", padding: "0 24px" }}>
    //       {subMenu.map((row, index) => {
    //         return (
    //           <MenuItem
    //             sx={{
    //               overflowWrap: "break-word",
    //               wordBreak: "break-word",
    //               whiteSpace: "unset",
    //             }}
    //             key={index}
    //             onClick={() => {
    //               subMenuHandler(row);
    //               linkTo(row.link);
    //             }}
    //           >
    //             {row.title}
    //           </MenuItem>
    //         );
    //       })}
    //     </Box>
    //     <Box sx={{ display: "flex", width: "60%" }}>
    //       {selectedSubMenu !== null && (
    //         <>
    //           <Box sx={{ width: "60%" }}>
    //             <Box sx={{ marginBottom: "32px" }}>
    //               <Typography
    //                 sx={{ marginBottom: "32px" }}
    //                 component="h1"
    //                 variant="h5"
    //               >
    //                 {selectedSubMenu.title}
    //               </Typography>
    //               <Typography>{selectedSubMenu.description}</Typography>
    //             </Box>
    //             {branch.length > 0 && (
    //               <Box>
    //                 {branch.map((row, index) => {
    //                   return (
    //                     <Box key={index}>
    //                       <Button>{row.title}</Button>
    //                     </Box>
    //                   );
    //                 })}
    //               </Box>
    //             )}
    //           </Box>
    //           {selectedSubMenu.goal !== undefined && (
    //             <Box sx={{ width: "40%", padding: "0 24px" }}>
    //               <Typography sx={{ fontWeight: 600, marginBottom: "32px" }}>
    //                 Goals
    //               </Typography>
    //               <Typography>{selectedSubMenu.goal}</Typography>
    //             </Box>
    //           )}
    //         </>
    //       )}
    //     </Box>
    //   </Box>
    // </Menu>
  );
};
export default MegaMenu;
