import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CustomSelect from "../components/common/inputFields/CustomSelect";
import CustomInput from "../components/common/inputFields/CustomInput";
import Consent from "../components/common/Consent/Consent";

const INQUIRY = [
  {
    value: "check",
    name: "I have a project and I want to check if Products and Services fit my requirements",
  },
  {
    value: "explore",
    name: "I want to explore job opportunities",
  },
  {
    value: "hr",
    name: "I have an HR-related inquiry",
  },
  {
    value: "partner",
    name: "I want to partner with Yondu",
  },
];

const INDUSTRY = [
  {
    value: "agriculture",
    name: "Agriculture",
  },
  {
    value: "bank commercial",
    name: "Bank - Commercial",
  },
  {
    value: "bank rural",
    name: "Bank - Rural & Thrift",
  },
  {
    value: "bank universal",
    name: "Bank - Universal",
  },
  {
    value: "bank universal",
    name: "Bank - Universal",
  },
];

const BSCALE = [
  {
    value: "1-99",
    name: "1-99 Employees",
  },
  {
    value: "100-999",
    name: "100 - 999 Employees",
  },
  {
    value: "1000+",
    name: "1000+ Employees",
  },
];
const GetInTouch = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [specificInquiry, setSpecificInquiry] = useState("");
  const [specificInquiryArray, setSpecificInquiryArray] = useState(INQUIRY);

  const [industry, setIndustry] = useState("");
  const [industryArray, setIndustryArray] = useState(INDUSTRY);

  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [businessScale, setBusinessScale] = useState("");
  const [businessScaleArray, setBusinessScaleArray] = useState(BSCALE);

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [allowMessage, setAllowMessage] = useState(false);
  const [allowProcess, setAllowProcess] = useState(false);

  const specificInquiryChangeHandler = (event) => {
    setSpecificInquiry(event.target.value);
  };
  const industryChangeHandler = (event) => {
    setIndustry(event.target.value);
  };

  const companyChangeHandler = (event) => {
    setCompany(event.target.value);
  };
  const designationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };
  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const businessScaleChangeHandler = (event) => {
    setBusinessScale(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const phoneChangeHandler = (event) => {
    setPhone(event.target.value);
  };
  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const allowMessageChangeHandler = () => {
    setAllowMessage((state) => !state);
  };
  const allowProcessChangeHandler = () => {
    setAllowProcess((state) => !state);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log(specificInquiry);
    console.log(industry);
    console.log(company);
    console.log(designation);
    console.log(firstName);
    console.log(lastName);
    console.log(businessScale);
    console.log(email);
    console.log(phone);
    console.log(message);
  };
  useEffect(() => {
    if (
      specificInquiry !== "" &&
      industry !== "" &&
      company !== "" &&
      designation !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      businessScale !== "" &&
      email !== "" &&
      phone !== "" &&
      message !== "" &&
      allowProcess
    ) {
      setIsValidated(true);
    } else {
      setIsValidated(false);
    }
  }, [
    specificInquiry,
    industry,
    company,
    designation,
    firstName,
    lastName,
    businessScale,
    email,
    phone,
    message,
    allowProcess
  ]);
  return (
    <Box className="get-in-touch">
      <Box className="get-in-touch__inner" sx={{ display: "flex" }}>
        <Box
          className="left"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Box component="img" src="./assets/get-in-touch.png" />
          <Box sx={{ width: "80%", margin: "0 40px 32px" }}>
            <Box>
              <Typography
                component="h1"
                variant="h3"
                sx={{ marginTop: "32px" }}
              >
                Business Partnership
              </Typography>
              <Typography>
                We're always happy to team up with awesome people like you!
                Let's get this bread!
              </Typography>
              <Button>Get Started Now</Button>
            </Box>
            <Box>
              <Typography
                component="h1"
                variant="h3"
                sx={{ marginTop: "32px" }}
              >
                Inquiries for HR
              </Typography>
              <Typography>
                For HR related inquiries, please send your request directly to
                hrrecords@yondu.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="right"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <Box sx={{ margin: "0 16px 32px" }}>
            <Typography component="h1" variant="h3">
              Send us a message
            </Typography>
            <Typography>
              Leave us a message and we'll make sure it gets to the righ place.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <form style={{ width: "100%" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CustomSelect
                  label="Specific Inquiry"
                  labelId="specific-inquiry-label"
                  selectId="specific-inquiry"
                  selectedMenu={specificInquiry}
                  selectMenuItem={specificInquiryArray}
                  selectChangeHandler={specificInquiryChangeHandler}
                />
                <CustomSelect
                  label="Industry"
                  labelId="industry-label"
                  selectId="industry"
                  selectedMenu={industry}
                  selectMenuItem={industryArray}
                  selectChangeHandler={industryChangeHandler}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CustomInput
                  label="Company Name"
                  value={company}
                  onChange={companyChangeHandler}
                />
                <CustomInput
                  label="Designation"
                  value={designation}
                  onChange={designationChangeHandler}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CustomInput
                  label="First Name"
                  value={firstName}
                  onChange={firstNameChangeHandler}
                />
                <CustomInput
                  label="Last Name"
                  value={lastName}
                  onChange={lastNameChangeHandler}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <CustomSelect
                  label="Business Scale"
                  labelId="business-scale-label"
                  selectId="business-scale"
                  selectedMenu={businessScale}
                  selectMenuItem={businessScaleArray}
                  selectChangeHandler={businessScaleChangeHandler}
                  className="one-third-desktop"
                />
                <CustomInput
                  label="Work Email Address"
                  type="email"
                  value={email}
                  onChange={emailChangeHandler}
                  className="one-third-desktop"
                />
                <CustomInput
                  label="Mobile Number"
                  type="tel"
                  value={phone}
                  onChange={phoneChangeHandler}
                  className="one-third-desktop"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  maxRows={4}
                  value={message}
                  onChange={messageChangeHandler}
                  className="full-width-desktop"
                  sx={{
                    width: "90%",
                    marginBottom: "16px",
                    fontSize: "0.9rem",
                  }}
                />
              </Box>
              <Consent
                allowMessage={allowMessage}
                allowProcess={allowProcess}
                allowMessageChangeHandler={allowMessageChangeHandler}
                allowProcessChangeHandler={allowProcessChangeHandler}
              />
              <Box className="form-btn" sx={{ display: "flex" }}>
                <Button
                  disabled={!isValidated}
                  className="main-btn"
                  onClick={onSubmitHandler}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default GetInTouch;
