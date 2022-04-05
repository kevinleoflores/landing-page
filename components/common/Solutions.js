import { Box, Typography } from "@mui/material";
import CardOne from "./components/CardOne";
import icon1 from "../../public/assets/solutions/1.JPG";
import icon2 from "../../public/assets/solutions/2.JPG";
import icon3 from "../../public/assets/solutions/3.JPG";
import icon4 from "../../public/assets/solutions/4.JPG";
import icon5 from "../../public/assets/solutions/5.JPG";
import icon6 from "../../public/assets/solutions/6.JPG";

const DETAILS = [
  {
    icon: icon1.src,
    title: "Business & Productivity Ready-to-use Software",
    description:
      "Improve business processes and workflow using top-notch productivity tools and softwares.",
    process1: "Cloud Erp",
    process2: "Document Management System",
  },
  {
    icon: icon2.src,
    title: "Cloud Services",
    description:
      "We cater great flexibility, scalability, cost, efficient, and security with Top Tier Business Solutions",
    process1: "Cloud Migration",
    process2: "Cloud Orchestration",
  },
  {
    icon: icon3.src,
    title: "Custom Software Development",
    description:
      "Customize and Automate tasks based on your business needs to bring high level of technological experience for your customers",
    process1: "Mobile App Development",
    process2: "System Integration",
    process3: "Webapp Development",
  },
  {
    icon: icon4.src,
    title: "E-commerce Solutions",
    description:
      "Integrate, manage, and grow your online business with excellent eCommerce solutions.",
    process1: "VesselII: E-Commerce Website Builder",
    process2: "Marketplace: GLife, GSave & Ginsure",
  },
  {
    icon: icon5.src,
    title: "Messaging Gateways",
    description:
      "Connect with your customers efficiently anytime, anywhere, and lead more people to your business",
    process1: "SMS Gateway",
    process2: "Rich Media Messaging Gateway",
  },
  {
    icon: icon6.src,
    title: "Managed IT Services",
    description:
      "Focus on more strategic tasks, such as running your business, while our IT Team handles your complex IT operations.",
    process1: "App Support",
    process2: "Desktop Support",
    process3: "DevOps",
    process4: "Expert Services & Consulting",
    process5: "Robotics Process Automation",
  },
];
const Solutions = () => {
  return (
    <Box id="solutions" component="section" className="solutions">
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: "center", paddingTop: "40px" }}
      >
        Solutions Toolbox
      </Typography>
      <Typography sx={{ textAlign: "center", paddingTop: "32px" }}>
        Our wide array of business solutions are specifically designed to
        address and meet your business needs.
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "24px" }}>
        {DETAILS.map((row, index) => {
          return (
            <CardOne
              key={index}
              icon={row.icon}
              title={row.title}
              description={row.description}
              process1={row.process1}
              process2={row.process2}
              process3={row.process3 ? row.process3 : ""}
              process4={row.process4 ? row.process4 : ""}
              process5={row.process5 ? row.process5 : ""}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default Solutions;
