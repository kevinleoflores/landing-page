import { Box, List, ListItem, ListItemText } from "@mui/material";
const SOLUTIONS = [
  { link: "#", title: "Business & Productivity Ready-to-use Software" },
  { link: "#", title: "Cloud Services" },
  { link: "#", title: "Custom Software Development" },
  { link: "#", title: "E-commerce Solutions" },
  { link: "#", title: "Messaging Gateways" },
  { link: "#", title: "Managed IT Services" },
];
const INDUSTRIES = [
  { link: "#", title: "Banking, Financial Services and Insurance" },
  { link: "#", title: "Logistics" },
  { link: "#", title: "Manufacturing" },
  { link: "#", title: "Retail" },
];
const ARTICLES = [
  { link: "#", title: "Case Studies" },
  { link: "#", title: "Blog" },
];
const CAREERS = [
  { link: "#", title: "Life at Yondu" },
  { link: "#", title: "Open Positions" },
  { link: "#", title: "Yondu University" },
  { link: "#", title: "Hiring Process" },
];
const MENU = [
  { title: "Solutions", menu: SOLUTIONS },
  { title: "Industries", menu: INDUSTRIES },
  { title: "Articles", menu: ARTICLES },
  { title: "Careers", menu: CAREERS },
];
const FooterOne = () => {
  return (
    <Box component="footer" className="bg-1">
      <Box className="footer-one">
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {MENU.map((row, index) => {
            return (
              <Box className="menu" key={index}>
                <Box>
                  <ListItemText
                    primary={row.title}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: "medium",
                      lineHeight: "20px",
                      mb: "2px",
                      color: "white",
                    }}
                    sx={{ my: 0 }}
                  />
                  <List dense>
                    {row.menu.map((item, index) => {
                      return (
                        <ListItem key={index} className="list-item">
                          {item.title}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default FooterOne;
